---
title: Cameras
date: 2024-12-15 09:00:00:00 -0500
permalink: /cameras/
layout: single
published: true

---

Pixel pitch values are sourced from manufacturer specifications or calculated based sensor dimensions and megapixels. Each value is validated from multiple sources when available. If you find any errors, please [send a correction](mailto:diff@590.mozmail.com?subject=diffraction.cAm Correction).

[{{ site.data.icons.viewfinder }} Add a Camera](mailto:diff@590.mozmail.com?subject=diffraction.cAm Add a Camera){: .btn .btn--success}

<form id="camera-controls" class="camera-controls" aria-label="Filter cameras">
  <div class="camera-controls__filters">
    <p class="camera-control camera-control--search">
      <label for="camera-search">Search</label>
      <input id="camera-search" name="camera-search" type="search" placeholder="Camera">
    </p>
    <p class="camera-control">
      <label for="camera-format">Format</label>
      <select id="camera-format" name="format">
        <option value="">All formats</option>
        {% assign camera_formats = site.data.cameras.cameras | map: "size" | uniq | sort %}
        {% for format in camera_formats %}
        {% unless format contains "inch" %}
        <option value="{{ format }}">{{ format }}</option>
        {% endunless %}
        {% endfor %}
        {% for format in camera_formats %}
        {% if format contains "inch" %}
        <option value="{{ format }}">{{ format }}</option>
        {% endif %}
        {% endfor %}
      </select>
    </p>
    <p class="camera-control">
      <button id="camera-reset" type="reset" class="btn btn--inverse btn--small">Reset filters</button>
    </p>
  </div>
</form>

<p id="camera-results" class="camera-results" aria-live="polite">{{ site.data.cameras.cameras.size }} cameras</p>

<div class="camera-table-wrapper" tabindex="0">
  <table id="camera-table">
  <thead>
  <tr>
    <th scope="col"><button type="button" class="camera-sort-button" data-sort="camera">Camera</button></th>
    <th scope="col"><button type="button" class="camera-sort-button" data-sort="format">Format</button></th>
    <th scope="col" class="camera-number"><button type="button" class="camera-sort-button" data-sort="pitch">Pitch (μm)</button></th>
    <th scope="col" class="camera-number"><button type="button" class="camera-sort-button" data-sort="megapixels">Megapixels</button></th>
    <th scope="col" class="camera-number">Pixels</th>
    <th scope="col" class="camera-number">Sensor (mm)</th>
  </tr>
  </thead>
  <tbody>
  {% for camera in site.data.cameras.cameras %}
  <tr data-camera="{{ camera.make }} {{ camera.model }}" data-format="{{ camera.size }}" data-megapixels="{{ camera.megapixels }}" data-pitch="{{ camera.pitch }}" data-index="{{ forloop.index0 }}">
    <td><a href="/?camera={{ camera.make }} {{ camera.model }}">{{ camera.make }} {{ camera.model }}</a></td>
    <td>{{ camera.size }}</td>
    <td class="camera-number">{{ camera.pitch }}</td>
    <td class="camera-number">{{ camera.megapixels }}</td>
    <td class="camera-number">{{ camera.hpixels }} × {{ camera.vpixels }}</td>
    <td class="camera-number">{{ camera.hsensor }} × {{ camera.vsensor }}</td>
  </tr>
  {% endfor %}
  </tbody>
  </table>
</div>
