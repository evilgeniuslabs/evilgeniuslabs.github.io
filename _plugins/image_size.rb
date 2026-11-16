# Liquid filter: {{ "/images/foo.jpg" | image_size }} → [width, height], or nil if the file is missing or
# not a PNG/JPEG/GIF. Used for og:image:width/height so link previews don't have to download the image
# just to lay out the card. Reads only the file header; plain Ruby, no gems.
module Jekyll
  module ImageSizeFilter
    @cache = {}
    class << self
      attr_reader :cache
    end

    def image_size(path)
      return nil if path.nil? || path.to_s.empty?

      site = @context.registers[:site]
      file = File.join(site.source, path.to_s.sub(%r{\A/}, ""))
      return nil unless File.file?(file)

      key = [file, File.mtime(file).to_i]
      ImageSizeFilter.cache.fetch(key) do
        ImageSizeFilter.cache[key] = ImageSizeFilter.read_size(file)
      end
    end

    def self.read_size(file)
      File.open(file, "rb") do |f|
        head = f.read(26) || ""
        if head.start_with?("\x89PNG\r\n\x1a\n".b)
          head[16, 8].unpack("NN")
        elsif head.start_with?("GIF8")
          head[6, 4].unpack("vv")
        elsif head.start_with?("\xFF\xD8".b)
          f.seek(2)
          jpeg_size(f)
        end
      end
    end

    # Walk the JPEG markers to the first start-of-frame (SOF0–SOF15, except DHT/JPG/DAC), which holds the size.
    def self.jpeg_size(f)
      loop do
        byte = f.read(1) or return nil
        next unless byte == "\xFF".b

        marker = f.read(1) or return nil
        marker = marker.ord
        next if marker == 0xFF || marker == 0x00 || marker == 0x01 || (0xD0..0xD9).cover?(marker)

        length = (f.read(2) or return nil).unpack1("n")
        if (0xC0..0xCF).cover?(marker) && ![0xC4, 0xC8, 0xCC].include?(marker)
          height, width = f.read(5)[1, 4].unpack("nn")
          return [width, height]
        end
        f.seek(length - 2, IO::SEEK_CUR)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ImageSizeFilter)
