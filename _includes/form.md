<form>

<div id="top-fields">

  <div class="column">
    <label for="camera" id="camera-label"><i class="fa-duotone fa-light fa-camera-retro"></i> Camera</label>
    <select name="camera" id="camera" onchange="updatePitch()">
      <option value="">- select camera -</option>
      {% for camera in site.data.cameras.cameras %}
      <option value="{{ camera.pitch }}">{{ camera.make }} {{ camera.model }}</option>
      {% endfor %}
    </select>
  </div>

  <div class="column">
    <label for="pitch" id="pitch-label"><i class="fa-light fa-ruler-horizontal"></i> Pixel Pitch (μm)</label>
    <input type="text" id="pitch" name="pitch" disabled>
  </div>

  <div class="column">
    <label for="filter" id="filter-label"><i class="fa-duotone fa-light fa-waveform"></i> Filter</label>
    <select name="filter" id="filter" onchange="updateFilter(this)">
      {% for filter in site.data.filters.filters %}
      <option value="{{ filter.wavelengths }}">{{ filter.filter }}</option>
      {% endfor %}
    </select>
  </div>

</div>
