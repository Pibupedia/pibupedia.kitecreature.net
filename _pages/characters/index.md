---
title: "Characters"
layout: default
permalink: "/characters/"
---
<div style="display:grid;grid-template-columns: 1fr 1fr;gap: 10px;">


{% for page in site.pages %}
    {% if page.path contains "/characters/" and page.name != "index.md" %}
        {% assign image = "/assets/images/" | append: page.image %}
        {% include page_link.html name=page.title img=image url=page.url %}
    {% endif %}
{% endfor %}
</div>
