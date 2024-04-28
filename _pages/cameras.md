---
title: Cameras
date: 2024-04-27 09:00:00:00 -0500
permalink: /cameras/
layout: single
published: true

toc: true
toc_label: "Cameras"
toc_icon: "fas fa-camera-retro"
toc_sticky: true

---

<a href="mailto:diff@590.mozmail.com?subject=diffraction.cAm Add a Camera">Add a Camera</a>

Pixel pitch values may be published by the manufacturer or calculated based sensor dimensions and megapixels. Each value is validated from multiple sources when available. If you find any errors, please <a href="mailto:diff@590.mozmail.com?subject=diffraction.cAm Correction">send a correction</a>.

## Supported Cameras

<table id="supported-cameras">
<caption>{{ site.data.cameras.cameras.size }} Supported Cameras</caption>
<tr>
  <th>Make</th>
  <th>Model</th>
  <th>Sensor Size</th>
  <th>Pixel Pitch (μm)</th>
</tr>
{% for camera in site.data.cameras.cameras %}
<tr>
  <td>{{ camera.make }}</td>
  <td><a href="/?camera={{ camera.make }} {{ camera.model }}">{{ camera.model }}</a></td>
  <td>{{ camera.size }}</td>
  <td>{{ camera.pitch }}</td>
</tr>
{% endfor %}
</table>

## Cameras by Pitch

{% assign cameras_by_pitch = site.data.cameras.cameras | sort: "pitch" | reverse %}

<table id="cameras-by-pitch">
<caption>{{ cameras_by_pitch.size }} Supported Cameras</caption>
<tr>
  <th>Make</th>
  <th>Model</th>
  <th>Sensor Size</th>
  <th>Pixel Pitch (μm)</th>
</tr>
{% for camera in cameras_by_pitch %}
<tr>
  <td>{{ camera.make }}</td>
  <td><a href="/?camera={{ camera.make }} {{ camera.model }}">{{ camera.model }}</a></td>
  <td>{{ camera.size }}</td>
  <td>{{ camera.pitch }}</td>
</tr>
{% endfor %}
</table>
