---
layout: default
rdf_prefix_path: "_data/prefixes.sparql"
---
<h1>{{ page.rdf | rdf_property: 'rdfs:label' }} Method</h1>

<p>{{ page.rdf | rdf_property: 'dc:description' }}</p>

{% assign steps = page.rdf | rdf_property: ':steps' | newline_to_br | strip_newlines | split: '<br />' %}

<ol>
{% for step in steps %}
<li>{{ step }}</li>
{% endfor %}
</ol>

<h2>Inputs</h2>
<p>To use this method, it’s usually helpful if you have information about:</p>
{% assign inputs = page.rdf | rdf_property: ':inputProvidedBy', nil, true %}
<ul>
{% for input in inputs %}
    <li>{{ input }}</li>
{% endfor %}
</ul>