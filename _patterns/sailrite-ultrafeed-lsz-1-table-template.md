---
title: "Template for Sailrite Ultrafeed LSZ-1 Table"
excerpt: "This template can help you to trace and cut the correct size hole in a table or other surface to flush-mount accommodate a Sailrite Ultrafeed LSZ-1."
header:
    show_overlay_excerpt: false
    image: /assets/images/patterns/sailrite-ultrafeed-lsz-1-table-template/custom-sewing-table-for-sailrite-ultrafeed-og.png            # Twitter (use 'overlay_image')
    og_image: /assets/images/patterns/sailrite-ultrafeed-lsz-1-table-template/custom-sewing-table-for-sailrite-ultrafeed-og.png
    overlay_image: /assets/images/patterns/sailrite-ultrafeed-lsz-1-table-template/custom-sewing-table-for-sailrite-ultrafeed.png    # Article header at 2048x768
    teaser: /assets/images/patterns/sailrite-ultrafeed-lsz-1-table-template/custom-sewing-table-for-sailrite-ultrafeed-th.png  # Shrink image to 575x216
sidebar: # Custom left sidebar options.
  nav_loc: # true/false
  nav_items: # populate this if nav_loc=true
    - title: "one"
      url: /guides/
    - title: "two"
      url: /about/
    - title: "three"
      url: /resources/
  sidebar_items:
    - image: /assets/images/patterns/sailrite-ultrafeed-lsz-1-table-template/sample.jpg
      image_alt: Low resolution sample of template. # alt
      text: Template is measured and drawn specifically to fit Sailrite's Ultrafeed LSZ-1. # Some text here
    - title: Dimensions # Another title
      text: Approximately 14.7" x 7.3" # More text here
    - title: Skill Level # A third title
      text: Nobody at Cracked Asphalt is a woodworker and this turned out alright. Take your time and watch your fingers. # more text still
    - title: # An extra title just to show nav=true. This is where the nav bar (if enabled) will go.
      nav: true # references a given key in _data/navigation.yml so make sure they match or leverage sidebar.loc=true/false
pattern_details:
  pattern_overview: We spent hours and hours meticulously measuring and refining this template to take the guess work out of cutting and routing a hole in our sewing table. We hope you find it useful.
  store_platform: Payhip
  store_link: https://payhip.com/b/ieTMb
  price: "$0"
  post_path: _posts/2023-02-18-custom-sewing-table-for-sailrite-ultrafeed.md
  information:
    - heading: Description
      copy: |
        This template can help you to trace and cut the correct size hole in a table or other surface to flush-mount accommodate a Sailrite Ultrafeed LSZ-1.

        This is a template to aid in sizing and cutting a hole in a table surface suitable for holding a Sailrite Ultrafeed sewing machine. Please note that this is not a physical product.
    - heading: Formats 
      copy: |
        The Sailrite Ultrafeed LSZ-1 table template is available in two formats
        - Letter/A4 for print and tape at home
        - Tabloid/A3 which will also work on a large format printer

        Both are included in a single zip file.
    - heading: Additional Information 
      copy: |
        You can learn more about this template, why we made it, and how we used at our post on this topic found in the link below.
      link_path: _posts/2023-02-18-custom-sewing-table-for-sailrite-ultrafeed.md
      link_text: Our blog post about this pattern.
    - heading: Send Pics 
      copy: |
        If you have found this resource to be helpful, please consider sending a picture of your project, signing up for our mailing list to stay in touch, or just saying hi.
      link_path: _pages/contact.md
      link_text: Our contact information can be found on our contact us page.
    - heading: Download
      copy: |
        The template is available for free via Payhip. Provide your email address when downloading to stay in touch or give us a fake email. Either way is fine.
---
<!--- This content is not displayed on page. It is present for searchability--->
<h1>Pattern Overview</h1>
{{ page.pattern_details.pattern_overview }}
{% assign deets = page.pattern_details %}
{% for topic in deets.information %}
<h2 id="{{ topic.heading | slugify }}">{{ topic.heading }}</h2>
{{ topic.copy | markdownify }}
{% if topic.link_path %}
    <p><a href="{% link {{ topic.link_path }} %}">{{ topic.link_text }}</a></p>
{% endif %}

{% endfor %}

<p><a href="{{ deets.store_link }}" class="btn btn--info btn--large">Download for {{ deets.price }} at {{ deets.store_platform }}</a></p>
<!--- End this content is not displayed on page. It is present for searchability--->