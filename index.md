---
layout: splash
published: true
---

{% include form.md %}

<table id="diff-table">
  <caption>Diffraction ratio</caption>
  <colgroup>
      <col span="2">
      <col span="11">
  </colgroup>
  <thead>
    <tr>
      <th colspan="2" rowspan="2" id="f-stop" scope="colgroup"><i class="fa-duotone fa-light fa-aperture"></i> ƒ-stops<br /> (<a id="thirds-toggle" href="">thirds</a>)</th>
      <th colspan="2" id="uv" scope="colgroup">Ultraviolet</th>
      <th colspan="5" id="visible" scope="colgroup">Visible Light</th>
      <th colspan="4" id="ir" scope="colgroup">Infrared</th>
    </tr>
    <tr>
      {% for wavelength in site.data.wavelengths.wavelengths %}
        <th id="w{{ wavelength.wavelength }}" scope="col">{{ wavelength.wavelength }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
    {% for f-number in site.data.f-numbers.f-number %}
      <tr id="row{{ f-number.f-stop }}">
        <td><input type="radio" id="rf-number-{{ f-number.f-stop }}" name="rf-number" value="{{ f-number.f-stop }}" onchange="highlightRow(this)"></td>
        <td><label for="rf-number-{{ f-number.f-stop }}">ƒ/{{ f-number.f-stop }}</label></td>
        {% for wavelength in site.data.wavelengths.wavelengths %}
          <td id="{{ f-number.f-stop }}-{{ wavelength.wavelength }}" class="w{{ wavelength.wavelength }}"></td>
        {% endfor %}
      </tr>
    {% endfor %}
  </tbody>
</table>

<div id="camera-details" class="camera-details">
  <div class="camera-details__item">
    <span class="camera-details__label">{{ site.data.icons.camera-retro }} Camera</span>
    <span id="detail-camera" class="camera-details__value">—</span>
  </div>
  <div class="camera-details__item">
    <span class="camera-details__label">{{ site.data.icons.ruler-horizontal }} Pixel Pitch</span>
    <span id="detail-pitch" class="camera-details__value">—</span>
  </div>
  <div class="camera-details__item">
    <span class="camera-details__label">{{ site.data.icons.grid-2 }} Megapixels</span>
    <span id="detail-megapixels" class="camera-details__value">—</span>
  </div>
  <div class="camera-details__item">
    <span class="camera-details__label">{{ site.data.icons.ruler-combined }} Pixel Dimensions</span>
    <span id="detail-pixels" class="camera-details__value">—</span>
  </div>
  <div class="camera-details__item">
    <span class="camera-details__label">{{ site.data.icons.crop-simple }} Sensor Size</span>
    <span id="detail-sensor" class="camera-details__value">—</span>
  </div>
</div>

</form>

{% include legend.md %}

{% include instructions.md %}
