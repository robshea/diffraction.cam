---
title: Digital Cameras
date: 2023-01-10 09:00:00:00 -0500
permalink: /cameras/
layout: single
published: true
---

## Cameras

<table id="digital-cameras">
<caption>Digital Cameras</caption>
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