---
title: Filters
date: 2024-01-11 09:00:00:00 -0500
permalink: /filters/
layout: single
published: true
---

<table id="filters">
<caption>Filters</caption>
<tr>
  <th>Filter</th>
  <th>Wavelengths Passed</th>
</tr>
{% for filter in site.data.filters.filters %}
<tr>
  <td>{{ filter.filter }}</td>
  <td>{{ filter.wavelengths }}</td>
</tr>
{% endfor %}
</table>