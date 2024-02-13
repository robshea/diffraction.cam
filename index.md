---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: splash
---

<form>
<label for="camera">Camera</label>
<select name="camera" id="camera" onchange="updatePitch()">
  <option value="">- select camera -</option>
  {% for camera in site.data.cameras.cameras %}
  <option value="{{ camera.pitch }}">{{ camera.make }} {{ camera.model }}</option>
  {% endfor %}
</select>

<label for="pitch">Pixel Pitch (μm)</label>
<input type="text" id="pitch" name="pitch" disabled>

<label for="filter">Filter</label>
<select name="filter" id="filter" onchange="updateFilter(this)">
  {% for filter in site.data.filters.filters %}
  <option value="{{ filter.wavelengths }}">{{ filter.filter }}</option>
  {% endfor %}
</select>

</form>

<table id="diff-table">
<caption>Visible Diffraction</caption>
<colgroup>
    <col span="1">
    <col span="11">
</colgroup>
<thead>
  <tr>
    <th></th>
    <th colspan="2" id="uv">Ultraviolet</th>
    <th colspan="5" id="visible">Visible Light</th>
    <th colspan="4" id="ir">Infrared</th>
  </tr>
  <tr>
    <th></th>
    {% for wavelength in site.data.wavelengths.wavelengths %}
      <th id="w{{ wavelength.wavelength }}">{{ wavelength.wavelength }}</th>
    {% endfor %}
  </tr>
</thead>
<tbody>
  {% for f-number in site.data.f-numbers.f-number %}
    <tr><td>ƒ/{{ f-number.f-stop }}</td>
    {% for wavelength in site.data.wavelengths.wavelengths %}
      <td id="{{ f-number.f-stop }}-{{ wavelength.wavelength }}" class="w{{ wavelength.wavelength }}"></td>
    {% endfor %}
    </tr>
  {% endfor %}
</tbody>
</table>

### How to Read this Table