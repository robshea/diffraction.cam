---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: splash
---

<form>

<div id="top-fields">

<div class="column">
  <label for="camera" id="camera-label">Camera</label>
  <select name="camera" id="camera" onchange="updatePitch()">
    <option value="">- select camera -</option>
    {% for camera in site.data.cameras.cameras %}
    <option value="{{ camera.pitch }}">{{ camera.make }} {{ camera.model }}</option>
    {% endfor %}
  </select>
</div>

<div class="column">
  <label for="pitch" id="pitch-label">Pixel Pitch (μm)</label>
  <input type="text" id="pitch" name="pitch" disabled>
</div>

<div class="column">
  <label for="filter" id="filter-label">Filter</label>
  <select name="filter" id="filter" onchange="updateFilter(this)">
    {% for filter in site.data.filters.filters %}
    <option value="{{ filter.wavelengths }}">{{ filter.filter }}</option>
    {% endfor %}
  </select>
</div>

</div>

<table id="diff-table">
<caption>Diffraction ratio</caption>
<colgroup>
    <col span="2">
    <col span="11">
</colgroup>
<thead>
  <tr>
    <th colspan="2"></th>
    <th colspan="2" id="uv">Ultraviolet</th>
    <th colspan="5" id="visible">Visible Light</th>
    <th colspan="4" id="ir">Infrared</th>
  </tr>
  <tr>
    <th colspan="2"></th>
    {% for wavelength in site.data.wavelengths.wavelengths %}
      <th id="w{{ wavelength.wavelength }}">{{ wavelength.wavelength }}</th>
    {% endfor %}
  </tr>
</thead>
<tbody>
  {% for f-number in site.data.f-numbers.f-number %}
    <tr id="row{{ f-number.f-stop }}">
      <td><input type="radio" id="rf-number" name="rf-number" value="{{ f-number.f-stop }}" onchange="highlightRow(this)"></td>
      <td>ƒ/{{ f-number.f-stop }}</td>
      {% for wavelength in site.data.wavelengths.wavelengths %}
        <td id="{{ f-number.f-stop }}-{{ wavelength.wavelength }}" class="w{{ wavelength.wavelength }}"></td>
      {% endfor %}
    </tr>
  {% endfor %}
</tbody>
</table>

</form>

<table id="legend-table">
<caption>Diffraction ratio legend</caption>
<colgroup>
    <col style="width: 50px">
    <col>
</colgroup>
<tr>
  <td class="good"></td>
  <td>No visible diffraction</td>
</tr>
<tr>
  <td class="maybe"></td>
  <td>Visible diffraction may slightly impact image sharpness</td>
</tr>
<tr>
  <td class="bad"></td>
  <td>Visible diffraction will impact image sharpness</td>
</tr>
</table>

### How To Use This Table

- Select a camera. If your camera is not listed, [request to add it here](/cameras/).
- Select a filter. If a column is dimmed, that wavelength of light will not be transmitted by the selected filter.
- Select the row of the ƒ-number you wish to shoot at.
