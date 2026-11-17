# Liquid filter: {{ content | split_toc }} → {"before" => …, "toc" => …, "after" => …}, or nil if the page has no
# kramdown TOC (`- TOC` + `{:toc}`). "toc" is the <ul id="markdown-toc"> list, nested lists included; the
# "<h2>Table of Contents</h2>" heading the posts put above it is dropped from "before" so the layout can supply
# its own. Used by _layouts/post.html to move the TOC into a sidebar on wide screens.
module Jekyll
  module SplitTocFilter
    TOC_START = '<ul id="markdown-toc">'.freeze
    TOC_HEADING = %r{<h2>\s*Table of Contents\s*</h2>\s*\z}i.freeze

    def split_toc(html)
      html = html.to_s
      start = html.index(TOC_START) or return nil

      # Find the </ul> that closes the TOC list, skipping nested lists.
      depth = 0
      pos = start
      finish = nil
      while (m = html.match(%r{<ul\b|</ul>}, pos))
        depth += m[0] == "</ul>" ? -1 : 1
        pos = m.end(0)
        if depth.zero?
          finish = pos
          break
        end
      end
      return nil unless finish

      {
        "before" => html[0...start].sub(TOC_HEADING, ""),
        "toc" => html[start...finish],
        "after" => html[finish..],
      }
    end
  end
end

Liquid::Template.register_filter(Jekyll::SplitTocFilter)
