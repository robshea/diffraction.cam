---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<table id="diff-table">
<caption>Visible Diffraction</caption>
<colgroup>
    <col span="1">
    <col span="11">
</colgroup>
<thead>
  <tr>
    <th></th>
    {% for wavelength in site.data.wavelengths.wavelengths %}
      <th>{{ wavelength.wavelength }}</th>
    {% endfor %}
  </tr>
</thead>
<tbody>
  {% for f-number in site.data.f-numbers.f-number %}
    <tr><td>{{ f-number.f-stop }}</td>
    {% for wavelength in site.data.wavelengths.wavelengths %}
      <td id="{{ f-number.f-stop }}-{{ wavelength.wavelength }}">{{ wavelength.wavelength }}</td>
    {% endfor %}
    </tr>
  {% endfor %}
</tbody>
</table>
