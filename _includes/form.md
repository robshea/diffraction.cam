<form>

<div id="camera-not-found-notice" class="notice--warning" role="alert" hidden>
  <p>{{ site.data.icons.warning }} <strong>Camera not found:</strong> "<span id="camera-not-found-name"></span>" isn't in the camera list. Pick one below, or <a href="/cameras/">request it be added</a>.</p>
</div>

<div id="top-fields">

  <div class="column">
    <label for="camera" id="camera-label">{{ site.data.icons.camera-retro }} Camera</label>
    <select name="camera" id="camera" onchange="updatePitch()">
      <option value="">- select camera -</option>
      {% for camera in site.data.cameras.cameras %}
      <option value="{{ camera.pitch }}" data-megapixels="{{ camera.megapixels }}" data-hpixels="{{ camera.hpixels }}" data-vpixels="{{ camera.vpixels }}" data-hsensor="{{ camera.hsensor }}" data-vsensor="{{ camera.vsensor }}">{{ camera.make }} {{ camera.model }}</option>
      {% endfor %}
    </select>
  </div>

  <div class="column">
    <label for="filter" id="filter-label">{{ site.data.icons.waveform }} Filter</label>
    <select name="filter" id="filter" onchange="updateFilter(this)">
      {% for filter in site.data.filters.filters %}
      <option value="{{ filter.wavelengths }}">{{ filter.filter }}</option>
      {% endfor %}
    </select>
  </div>

  <div class="column">
    <a href="#how-to-use" aria-label="Help" class="help-link">{{ site.data.icons.help }}</a>
  </div>

</div>
