---
title: Wissen
icon: fas fa-book
order: 1
---

# Wissen

Bereinigte technische Dokumentation zu nachhaltigen Systemen, Automatisierung, Linux, Self-Hosting, lokaler KI und digitaler Souveränität.

{% assign posts = site.posts %}
{% if posts.size > 0 %}
<ul>
  {% for post in posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <p>{{ post.description | default: post.excerpt }}</p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>Noch keine Wissensbeiträge veröffentlicht.</p>
{% endif %}