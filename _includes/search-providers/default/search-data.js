window.TEXT_SEARCH_DATA={
  'Pages':[
    {%- assign _first = true -%}
    {%- for _page in site.html_pages -%}
      {%- if _page.title and _page.url != '/404.html' and _page.url != '/archive.html' -%}
      {%- unless _first -%},{%- endunless -%}
      {%- assign _first = false -%}
      {%- include snippets/prepend-baseurl.html path=_page.url -%}
      {%- assign _url = __return -%}
      {'title':{{ _page.title | jsonify }},'url':{{ _url | jsonify }},
      'text':{{ _page.excerpt | append: ' ' | append: _page.content | strip_html | strip_newlines | truncate: 3000 | jsonify }}}
      {%- endif -%}
    {%- endfor -%}
  ],
  'News and blog':[
    {%- for _article in site.posts -%}
      {%- unless forloop.first -%},{%- endunless -%}
      {%- include snippets/prepend-baseurl.html path=_article.url -%}
      {%- assign _url = __return -%}
      {'title':{{ _article.title | jsonify }},'url':{{ _url | jsonify }},
      'text':{{ _article.content | strip_html | strip_newlines | truncate: 3000 | jsonify }}}
    {%- endfor -%}
  ]
};
