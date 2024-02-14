---
title: Supported Cameras
date: 2024-01-11 09:00:00:00 -0500
permalink: /cameras/
layout: single
published: true
---

<a href="mailto:diff@590.mozmail.com?subject=diffraction.cam Add a Camera">Add a Camera</a>

<table id="supported-cameras">
<caption>Supported Cameras</caption>
<tr>
  <th>Make</th>
  <th>Model</th>
  <th>Pixel Pitch (μm)</th>
</tr>
{% for camera in site.data.cameras.cameras %}
<tr>
  <td>{{ camera.make }}</td>
  <td>{{ camera.model }}</td>
  <td>{{ camera.pitch }}</td>
</tr>
{% endfor %}
</table>