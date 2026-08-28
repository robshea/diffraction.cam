### How To Use

- {{ site.data.icons.camera-retro }} **Camera** select a camera. If your camera is not listed, [request to add it here](/cameras/).
- {{ site.data.icons.waveform }} **Filter** select a filter. If a column is gray, that wavelength of light will not be transmitted by the selected filter.
  - Select `Full spectrum` when using a full spectrum converted camera with no additional filter. If you use a full spectrum camera with an additional filter, then select the filter used.
  - Select `Hot mirror or UV/IR cut` for an unconverted camera, as these contain a hot mirror filter, or when using a full spectrum camera with an added UV/IR cut filter.
  - If you add a filter to an unconverted camera, select that filter. This should be a 720 nm or higher filter.
- {{ site.data.icons.aperture }}  **ƒ-stops** switch between (whole) and (third) values.
  - {{ site.data.icons.aperture-green }} **Safe** shows the highest ƒ-number that you can use to completely avoid diffraction. This ƒ-number has a Diffraction ratio of 3 or lower at all wavelengths.
  - {{ site.data.icons.aperture-yellow }} **Caution** shows the ƒ-number that you can use with mild visible diffraction. This ƒ-number has a Diffraction ratio of 3.75 or lower at all wavelengths.
  - {{ site.data.icons.aperture-red }} **Avoid** shows the ƒ-number that will produce visible diffraction. This ƒ-number has a Diffraction ratio of 4.5 or higher at some wavelengths.
  - Safe, Caution, and Avoid ƒ-stops are calculated to the one-third ƒ-stop regardless of whether you are viewing the whole stop or one-third ƒ-stop table.
  - Optionally, select the row of the ƒ-stop you wish to shoot at.
