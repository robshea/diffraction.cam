---
title: Wavelengths
date: 2024-01-11 09:00:00:00 -0500
permalink: /wavelengths/
layout: single
published: true
---

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