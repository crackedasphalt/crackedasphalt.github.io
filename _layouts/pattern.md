---
layout: single
classes: wide
---
<h1>Pattern Overview</h1>
{{ page.pattern_details.pattern_overview }}
{% assign details = page.pattern_details %}
{% for topic in details.information %}
<h2 id="{{ topic.heading | slugify }}">{{ topic.heading }}</h2>
{{ topic.copy | markdownify }}
{% if topic.link_path %}
    <p><a href="{% link {{ topic.link_path }} %}">{{ topic.link_text }}</a></p>
{% endif %}

{% endfor %}

<p><a href="{{ details.store_link }}" class="btn btn--info btn--large">Download for {{ details.price }} at {{ details.store_platform }}</a></p>