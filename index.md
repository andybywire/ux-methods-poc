---
title: UX Methods
rdf_prefix_path: "_data/prefixes.sparql"
---
{% assign uxm-discipline = site.pages | where: "template", "discipline" | sort: 'name' %}
{% assign uxm-method = site.pages | where: "template", "method" | sort: 'name' %}

<h2>Disciplines</h2>
<ul>
{% for page in uxm-discipline %}
  <li><a href="/{{ page.rdf.page_url }}.html">{{ page.rdf.page_url }}</a></li>
{% endfor %}
</ul>

<h2>Methods</h2>
<ul>
{% for page in uxm-method %}
  <li><p><a href="/{{ page.rdf.page_url }}.html">{{ page.rdf.page_url }}</a> <br /> 
  {{ page.rdf | rdf_property: 'dc:description' | truncate: 100 }}</p></li>
{% endfor %}
</ul>