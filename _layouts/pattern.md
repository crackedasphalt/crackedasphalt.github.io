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
    {% assign link = topic.link_path %}
    {% case topic.link_path %}
    {% when topic.link_path contains "_posts" %}
    <p><a href="{% link {{ link }} %}">{{ topic.link_text }}</a></p>
    {% else %}
    <p><a href="{% link {{ link }} %}">{{ topic.link_text }}</a></p>
    {% endcase %}
{% endif %}

{% endfor %}

<p><a href="{{ details.store_link }}" class="btn btn--info btn--large">Download for {{ details.price }} at {{ details.store_platform }}</a></p>