---
layout: splash
published: true
---

{% include form.md %}

{% include camera-details.md %}

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

</form>

{% include legend.md %}

{% include instructions.md %}
