---
date: 2026-01-18 09:00:00:00 -0500
permalink: /thirds/
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
      <th colspan="2" rowspan="2" id="f-stop"><i class="fa-duotone fa-light fa-aperture"></i> ƒ-stops<br /> (<a id="thirds-toggle" href="">whole</a>)</th>
      <th colspan="2" id="uv">Ultraviolet</th>
      <th colspan="5" id="visible">Visible Light</th>
      <th colspan="4" id="ir">Infrared</th>
    </tr>
    <tr>
      {% for wavelength in site.data.wavelengths.wavelengths %}
        <th id="w{{ wavelength.wavelength }}">{{ wavelength.wavelength }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
    {% for f-number in site.data.f-numbers-thirds.f-number %}
      <tr id="row{{ f-number.f-stop }}">
        <td><input type="radio" id="rf-number-{{ f-number.f-stop }}" name="rf-number" value="{{ f-number.f-stop }}" onchange="highlightRow(this)"></td>
        <td>ƒ/{{ f-number.f-stop }}</td>
        {% for wavelength in site.data.wavelengths.wavelengths %}
          <td id="{{ f-number.f-stop }}-{{ wavelength.wavelength }}" class="w{{ wavelength.wavelength }}"></td>
        {% endfor %}
      </tr>
    {% endfor %}
  </tbody>
</table>

</form>

{% include legend.md %}
