// f-numbers
const f_numbers = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32];
// wavelengths
const wavelengths = [350, 400, 470, 550, 590, 665, 720, 780, 830, 930, 1000]

function updatePitch() {

  // Get the selected value from the "camera" select field
  const pitch_micron = document.querySelector('#camera').value;
  // Update the value of the "pitch" input field
  document.getElementById("pitch").value = pitch_micron;

  let cell_id = '';
  // loop over f-numbers
  let f = 0;
  while (f < f_numbers.length) {

    // loop over wavelengths
    let w = 0;
    let cell_class = "";
    while (w < wavelengths.length) {

      cell_id = f_numbers[f] + "-"+wavelengths[w];
      ratio = airyPitchRatio(f_numbers[f], wavelengths[w], pitch_micron);
      document.getElementById(cell_id).innerHTML = ratio;

      if (ratio <= 3) {
        cell_class = "good";
      } else if (ratio >= 4.5) {
        cell_class = "bad";
      } else {
        cell_class = "maybe";
      }

      var element = document.getElementById(cell_id);
      element.classList.remove("good", "maybe", "bad");
      element.classList.add(cell_class);
      w++;
    }
    f++;
  }
}

function airyPitchRatio(f_number, wavelength, pitch_micron) {
  let pitch_nm = pitch_micron * 1000;
  let ratio = 2 * 1.22 * f_number * wavelength / pitch_nm;
  let rounded = Math.round(ratio * 100) / 100;
  return rounded;
}

function updateFilter(filterWavelengths) {
  var wavelengthsList = filterWavelengths.value;
  let w = 0;
  let cell_class = "";
  while (w < wavelengths.length) {
    var elements = document.querySelectorAll(".w"+wavelengths[w]);

    for (var i = 0; i < elements.length; i++) {
      if (wavelengthsList.includes(wavelengths[w], 0)) {
        // show column
        elements[i].classList.remove("hide", "show");
        elements[i].classList.add("show");
      } else {
        // hide column
        elements[i].classList.remove("hide", "show");
        elements[i].classList.add("hide");
      }     
    }
    w++;

  }
}
