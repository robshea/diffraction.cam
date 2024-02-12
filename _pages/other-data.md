---
title: Other Data
date: 2024-01-11 09:00:00:00 -0500
permalink: /other-data/
layout: single
published: true
---

<table id="f-numbers">
<caption>ƒ-numbers</caption>
<tr>
  <th>ƒ-stop</th>
</tr>
{% for f in site.data.f-numbers.f-number %}
<tr>
  <td>{{ f.f-stop }}</td>
</tr>
{% endfor %}
</table>

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

<table id="wavelengths">
<caption>Wavelengths</caption>
<tr>
  <th>Wavelengths</th>
</tr>
{% for wave in site.data.wavelengths.wavelengths %}
<tr>
  <td>{{ wave.wavelength }}</td>
</tr>
{% endfor %}
</table>