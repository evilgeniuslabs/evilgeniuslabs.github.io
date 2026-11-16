# Adds width="…" height="…" (the file's own pixel size) to every <img> and <video> in rendered HTML that points at a
# local file and has neither attribute. Browsers turn the pair into an aspect ratio, so space is reserved before the
# file loads and later content doesn't jump down as images arrive or lazy videos (js/site.js) get their src. That
# keeps #anchor links (e.g. the table of contents) landing on their heading. css/styles.css sets height: auto on
# such elements so a style/class width (style="width:340px", .post-img) still scales the height to match.
#
# Sizes come from file headers: PNG/GIF/JPEG via _plugins/image_size.rb, MP4 via the video track header (tkhd),
# SVG via its width/height or viewBox. Anything else (external URLs, unknown formats) is left untouched.
require "uri"
require_relative "image_size"

module Jekyll
  module MediaSize
    TAG = %r{<(img|video)\b[^>]*>}i.freeze
    HAS_SIZE = /\s(?:width|height)\s*=/i.freeze
    SRC = /\s(?:data-src|src)\s*=\s*"([^"]*)"/i.freeze # data-src first: lazy videos have no src yet

    @cache = {}

    class << self
      def add_sizes(html, source)
        html.gsub(TAG) do |tag|
          next tag if tag.match?(HAS_SIZE)

          src = tag[SRC, 1]
          size = src && size_of(src, source)
          next tag unless size

          tag.sub(/\A<(img|video)/i) { "<#{Regexp.last_match(1)} width=\"#{size[0]}\" height=\"#{size[1]}\"" }
        end
      end

      def size_of(src, source)
        return nil unless src.start_with?("/") && !src.start_with?("//")

        path = URI.decode_uri_component(src.sub(/[?#].*\z/, "").delete_prefix("/"))
        file = File.join(source, path)
        return nil unless File.file?(file)

        key = [file, File.mtime(file).to_i]
        @cache.fetch(key) do
          size = read_size(file)
          @cache[key] = size && size.all? { |n| n.is_a?(Integer) && n.positive? } ? size : nil
        end
      rescue ArgumentError
        nil
      end

      def read_size(file)
        case File.extname(file).downcase
        when ".mp4", ".m4v", ".mov" then mp4_size(file)
        when ".svg" then svg_size(file)
        else ImageSizeFilter.read_size(file)
        end
      rescue StandardError
        nil
      end

      # Walk the box tree to moov/trak/tkhd and return the first track with a picture size (audio tracks are 0×0).
      def mp4_size(file)
        File.open(file, "rb") { |f| find_tkhd(f, 0, f.size) }
      end

      def find_tkhd(f, from, to)
        pos = from
        while pos + 8 <= to
          f.seek(pos)
          size, type = f.read(8).unpack("Na4")
          header = 8
          if size == 1
            size = f.read(8).unpack1("Q>")
            header = 16
          elsif size.zero?
            size = to - pos
          end
          return nil if size < header

          case type
          when "moov", "trak"
            found = find_tkhd(f, pos + header, pos + size)
            return found if found
          when "tkhd"
            f.seek(pos + size - 44) # 36-byte matrix, then 16.16 fixed-point width and height
            matrix = f.read(36).unpack("l>9")
            width, height = f.read(8).unpack("N2").map { |v| (v >> 16) }
            if width.positive? && height.positive?
              rotated = matrix[0].zero? && !matrix[1].zero? # 90° / 270°: shown sideways
              return rotated ? [height, width] : [width, height]
            end
          end
          pos += size
        end
        nil
      end

      def svg_size(file)
        head = File.read(file, 4096)
        root = head[/<svg\b[^>]*>/m] or return nil
        width = root[/\swidth\s*=\s*["']\s*([\d.]+)(?:px)?\s*["']/, 1]
        height = root[/\sheight\s*=\s*["']\s*([\d.]+)(?:px)?\s*["']/, 1]
        return [width.to_f.round, height.to_f.round] if width && height

        box = root[/\sviewBox\s*=\s*["']([^"']*)["']/, 1] or return nil
        _, _, w, h = box.split(/[\s,]+/).map(&:to_f)
        w && h ? [w.round, h.round] : nil
      end
    end
  end
end

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output_ext == ".html" && doc.output&.match?(/<(?:img|video)\b/i)

  doc.output = Jekyll::MediaSize.add_sizes(doc.output, doc.site.source)
end
