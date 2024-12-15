---
title: Cameras
date: 2024-12-15 09:00:00:00 -0500
permalink: /cameras/
layout: single
published: true

toc: true
toc_label: Cameras
toc_icon: fa-duotone fa-light fa-camera-retro
toc_sticky: true

---

<a href="mailto:diff@590.mozmail.com?subject=diffraction.cAm Add a Camera"><i class="fa-duotone fa-light fa-camera-viewfinder"></i> Add a Camera</a>{: .btn .btn--success}

Pixel pitch values may be published by the manufacturer or calculated based sensor dimensions and megapixels. Each value is validated from multiple sources when available. If you find any errors, please <a href="mailto:diff@590.mozmail.com?subject=diffraction.cAm Correction">send a correction</a>.

## Supported Cameras

<table id="supported-cameras">
<caption>{{ site.data.cameras.cameras.size }} Supported Cameras</caption>
<tr>
  <th>Make</th>
  <th>Model</th>
  <th>Sensor Size</th>
  <th>Pixel Pitch (μm)</th>
  <th>Megapixels</th>
</tr>
{% for camera in site.data.cameras.cameras %}
<tr>
  <td>{{ camera.make }}</td>
  <td><a href="/?camera={{ camera.make }} {{ camera.model }}">{{ camera.model }}</a></td>
  <td>{{ camera.size }}</td>
  <td>{{ camera.pitch }}</td>
  <td style="text-align: right;">{{ camera.megapixels }}</td>
</tr>
{% endfor %}
</table>

## Cameras by Pitch

If you are looking for a camera with the greatest depth of field, start at the top of this list and work your way down.

{% assign cameras_by_pitch = site.data.cameras.cameras | sort: "pitch" | reverse %}

<table id="cameras-by-pitch">
<caption>{{ cameras_by_pitch.size }} Supported Cameras</caption>
<tr>
  <th>Make</th>
  <th>Model</th>
  <th>Sensor Size</th>
  <th>Pixel Pitch (μm)</th>
  <th>Megapixels</th>
</tr>
{% for camera in cameras_by_pitch %}
<tr>
  <td>{{ camera.make }}</td>
  <td><a href="/?camera={{ camera.make }} {{ camera.model }}">{{ camera.model }}</a></td>
  <td>{{ camera.size }}</td>
  <td>{{ camera.pitch }}</td>
  <td style="text-align: right;">{{ camera.megapixels }}</td>
</tr>
{% endfor %}
</table>
