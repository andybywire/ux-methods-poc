---
title: UX Methods
---
{% assign uxm-discipline = site.pages | where: "template", "discipline" %}
{% assign uxm-method = site.pages | where: "template", "method" %}

<h2>Disciplines</h2>
<ul>
{% for page in uxm-discipline %}
  <li><a href="/{{ page.rdf.page_url }}.html">{{ page.rdf.page_url }}</a></li>
{% endfor %}
</ul>

<h2>Methods</h2>
<ul>
{% for page in uxm-method %}
  <li><a href="/{{ page.rdf.page_url }}.html">{{ page.rdf.page_url }}</a></li>
{% endfor %}
</ul>