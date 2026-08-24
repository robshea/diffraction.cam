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

Pixel pitch values are sourced from manufacturer specifications or calculated based sensor dimensions and megapixels. Each value is validated from multiple sources when available. If you find any errors, please [send a correction](mailto:diff@590.mozmail.com?subject=diffraction.cAm Correction).

[{{ site.data.icons.viewfinder }} Add a Camera](mailto:diff@590.mozmail.com?subject=diffraction.cAm Add a Camera){: .btn .btn--success}

## Supported Cameras

<table id="supported-cameras">
<caption>{{ site.data.cameras.cameras.size }} Supported Cameras</caption>
<tr>
  <th>Camera</th>
  <th>Sensor Size</th>
  <th style="text-align: right;">Pixel Pitch (μm)</th>
  <th style="text-align: right;">Megapixels</th>
  <th style="text-align: right;">Sensor Pixels</th>
  <th style="text-align: right;">Sensor Size (mm)</th>
</tr>
{% for camera in site.data.cameras.cameras %}
<tr>
  <td><a href="/?camera={{ camera.make }} {{ camera.model }}">{{ camera.make }} {{ camera.model }}</a></td>
  <td>{{ camera.size }}</td>
  <td style="text-align: right;">{{ camera.pitch }}</td>
  <td style="text-align: right;">{{ camera.megapixels }}</td>
  <td style="text-align: right;">{{ camera.hpixels }} × {{ camera.vpixels }}</td>
  <td style="text-align: right;">{{ camera.hsensor }} × {{ camera.vsensor }}</td>
</tr>
{% endfor %}
</table>

## Cameras by Pitch

If you are looking for a camera with the greatest depth of field, start at the top of this list and work your way down.

{% assign cameras_by_pitch = site.data.cameras.cameras | sort: "pitch" | reverse %}

<table id="cameras-by-pitch">
<caption>{{ cameras_by_pitch.size }} Supported Cameras</caption>
<tr>
  <th>Camera</th>
  <th>Sensor Size</th>
  <th style="text-align: right;">Pixel Pitch (μm)</th>
  <th style="text-align: right;">Megapixels</th>
  <th style="text-align: right;">Sensor Pixels</th>
  <th style="text-align: right;">Sensor Size (mm)</th>
</tr>
{% for camera in cameras_by_pitch %}
<tr>
  <td><a href="/?camera={{ camera.make }} {{ camera.model }}">{{ camera.make }} {{ camera.model }}</a></td>
  <td>{{ camera.size }}</td>
  <td style="text-align: right;">{{ camera.pitch }}</td>
  <td style="text-align: right;">{{ camera.megapixels }}</td>
  <td style="text-align: right;">{{ camera.hpixels }} × {{ camera.vpixels }}</td>
  <td style="text-align: right;">{{ camera.hsensor }} × {{ camera.vsensor }}</td>
</tr>
{% endfor %}
</table>
