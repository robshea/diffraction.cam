const wavelengths = [350, 400, 470, 550, 590, 665, 720, 780, 830, 930, 1000];

// Always used for the Safe f-stop calculation, regardless of which f-stop
// table (whole or thirds) is on screen, so the recommendation has thirds-stop
// precision everywhere instead of jumping around depending on the page.
const f_numbers_thirds = [1, 1.1, 1.3, 1.4, 1.6, 1.8, 2, 2.2, 2.5, 2.8, 3.2, 3.6, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10.1, 11, 12.7, 14.3, 16, 18, 20.2, 22, 25.4, 28.5, 32];

if (window.location.href.includes('thirds')) {
  // if viewing the thirds f-stop page "/thirds/"
  var f_numbers = f_numbers_thirds;
  var togglepath = "/?camera=";
} else {
  // if viewing the whole f-stop page "/"
  var f_numbers = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32];
  var togglepath = "/thirds/?camera=";
}

function updatePitch() {

  // update query string parameter from selected field
  let urlParams = new URLSearchParams(window.location.search);
  const selectedCamera = document.querySelector('#camera option:checked').label;
  urlParams.set("camera", selectedCamera);
  history.replaceState(null, null, "?"+urlParams.toString());

  // add query string to toggle link
  const a = document.getElementById('thirds-toggle');
  a.href = togglepath + selectedCamera;

  // get the selected value from the "camera" select field
  const selectedOption = document.querySelector('#camera option:checked');
  const pitch_micron = document.querySelector('#camera').value;

  updateCameraDetails(selectedOption, pitch_micron);
  updateFilterDetail();
  updateSafeFStop();
  updateCautionFStop();
  updateAvoidFStop();

  let cell_id = '';
  // loop over f-numbers
  let f = 0;
  while (f < f_numbers.length) {

    // loop over wavelengths
    let w = 0;
    let cell_class = "";
    while (w < wavelengths.length) {

      cell_id = f_numbers[f] + "-"+wavelengths[w];
      let element = document.getElementById(cell_id);

      if (!pitch_micron) {
        // no camera selected — show an empty cell instead of Infinity
        element.innerHTML = "";
        element.classList.remove("good", "maybe", "bad");
        w++;
        continue;
      }

      ratio = airyPitchRatio(f_numbers[f], wavelengths[w], pitch_micron);
      element.innerHTML = ratio;

      if (ratio <= 3) {
        cell_class = "good";
      } else if (ratio >= 4.5) {
        cell_class = "bad";
      } else {
        cell_class = "maybe";
      }

      element.classList.remove("good", "maybe", "bad");
      element.classList.add(cell_class);
      w++;
    }
    f++;
  }
}

function updateCameraDetails(selectedOption, pitch_micron) {
  const detailCamera = document.getElementById("detail-camera");
  if (!detailCamera) return; // camera-details block not present on this page

  const detailPitch = document.getElementById("detail-pitch");
  const detailMegapixels = document.getElementById("detail-megapixels");
  const detailPixels = document.getElementById("detail-pixels");
  const detailSensor = document.getElementById("detail-sensor");

  if (!pitch_micron) {
    detailCamera.textContent = "—";
    detailPitch.textContent = "—";
    detailMegapixels.textContent = "—";
    detailPixels.textContent = "—";
    detailSensor.textContent = "—";
    return;
  }

  detailCamera.textContent = selectedOption.label;
  detailPitch.textContent = pitch_micron + " μm";
  detailMegapixels.textContent = selectedOption.dataset.megapixels;
  detailPixels.textContent = selectedOption.dataset.hpixels + " × " + selectedOption.dataset.vpixels;
  detailSensor.textContent = selectedOption.dataset.hsensor + " × " + selectedOption.dataset.vsensor + " mm";
}

function airyPitchRatio(f_number, wavelength, pitch_micron) {
  let pitch_nm = pitch_micron * 1000;
  let ratio = 2 * 1.22 * f_number * wavelength / pitch_nm;
  let rounded = Math.round(ratio * 100) / 100;
  return rounded;
}

// Highest f-stop where every wavelength a filter passes stays "good" (<=3).
// Always evaluated at thirds-stop precision (f_numbers_thirds), independent
// of whether the whole or thirds table is currently on screen, so the value
// doesn't change depending on which page you're viewing.
// f_numbers_thirds is ascending, so walk from the narrowest aperture down.
// Returns null if even the widest aperture fails.
function getSafeFStop(pitch_micron, activeWavelengths, threshold = 3) {
  if (!pitch_micron) return null;

  for (let f = f_numbers_thirds.length - 1; f >= 0; f--) {
    const allGood = activeWavelengths.every(
      w => airyPitchRatio(f_numbers_thirds[f], w, pitch_micron) <= threshold
    );
    if (allGood) return f_numbers_thirds[f];
  }
  return null;
}

// Lowest f-stop where at least one wavelength a filter passes is already
// "bad" (>=4.5). Unlike getSafeFStop, only one wavelength needs to cross the
// threshold, not all of them. Walks from the widest aperture up and returns
// the first (i.e. lowest) f-number that qualifies.
// Returns null if even the narrowest aperture stays under the threshold.
function getAvoidFStop(pitch_micron, activeWavelengths, threshold = 4.5) {
  if (!pitch_micron) return null;

  for (let f = 0; f < f_numbers_thirds.length; f++) {
    const anyBad = activeWavelengths.some(
      w => airyPitchRatio(f_numbers_thirds[f], w, pitch_micron) >= threshold
    );
    if (anyBad) return f_numbers_thirds[f];
  }
  return null;
}

function updateFilterDetail() {
  const detailFilter = document.getElementById("detail-filter");
  if (!detailFilter) return; // filter-detail block not present on this page

  const filterSelect = document.querySelector('#filter');
  const selectedOption = filterSelect ? filterSelect.options[filterSelect.selectedIndex] : null;
  detailFilter.textContent = selectedOption ? selectedOption.label : "—";
}

function updateSafeFStop() {
  const detailSafe = document.getElementById("detail-safe-fstop");
  if (!detailSafe) return; // safe-fstop block not present on this page

  const pitch_micron = document.querySelector('#camera').value;
  const filterSelect = document.querySelector('#filter');

  if (!pitch_micron || !filterSelect || !filterSelect.value) {
    detailSafe.textContent = "—";
    return;
  }

  const activeWavelengths = filterSelect.value.split(",").map(s => parseInt(s.trim(), 10));
  const bestFStop = getSafeFStop(pitch_micron, activeWavelengths);
  detailSafe.textContent = bestFStop === null ? "None" : `ƒ/${bestFStop}`;
}

// Highest f-stop where every wavelength a filter passes stays "caution" (<=3.75).
// Same logic as updateSafeFStop but with the more permissive threshold.
function updateCautionFStop() {
  const detailCaution = document.getElementById("detail-caution-fstop");
  if (!detailCaution) return; // caution-fstop block not present on this page

  const pitch_micron = document.querySelector('#camera').value;
  const filterSelect = document.querySelector('#filter');

  if (!pitch_micron || !filterSelect || !filterSelect.value) {
    detailCaution.textContent = "—";
    return;
  }

  const activeWavelengths = filterSelect.value.split(",").map(s => parseInt(s.trim(), 10));
  const bestFStop = getSafeFStop(pitch_micron, activeWavelengths, 3.75);
  detailCaution.textContent = bestFStop === null ? "None" : `ƒ/${bestFStop}`;
}

// Highest f-stop where any wavelength a filter passes has already gone "bad" (>=4.5).
function updateAvoidFStop() {
  const detailAvoid = document.getElementById("detail-avoid-fstop");
  if (!detailAvoid) return; // avoid-fstop block not present on this page

  const pitch_micron = document.querySelector('#camera').value;
  const filterSelect = document.querySelector('#filter');

  if (!pitch_micron || !filterSelect || !filterSelect.value) {
    detailAvoid.textContent = "—";
    return;
  }

  const activeWavelengths = filterSelect.value.split(",").map(s => parseInt(s.trim(), 10));
  const worstFStop = getAvoidFStop(pitch_micron, activeWavelengths);
  detailAvoid.textContent = worstFStop === null ? "None" : `ƒ/${worstFStop}`;
}

function updateFilter(input) {
  let wavelengthsList = input.value;
  let w = 0;
  while (w < wavelengths.length) {
    let elements = document.querySelectorAll(".w"+wavelengths[w]);

    for (let i = 0; i < elements.length; i++) {
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
  updateFilterDetail();
  updateSafeFStop();
  updateCautionFStop();
  updateAvoidFStop();
}

function highlightRow(input) {
  let selected_row = input.value;
  let f = 0;
  while (f < f_numbers.length) {
    let element = document.getElementById("row"+f_numbers[f]);
    if (selected_row == f_numbers[f]) {
      element.classList.add("highlight");
    } else {
      element.classList.remove("highlight");
    }
    f++;
  }
}

const loadDefaultCamera = (e) => {
  let urlParams = new URLSearchParams(window.location.search);
  let camera = 'Canon EOS R';
  if (urlParams.get('camera')) {
    camera = urlParams.get('camera');
  }
  const $select = document.querySelector('#camera');
  const $options = Array.from($select.options);
  const optionToSelect = $options.find(item => item.text === camera);
  if (optionToSelect) {
    optionToSelect.selected = true;
  } else if (!urlParams.get('camera') && $options.length > 1) {
    // hardcoded default camera missing from cameras.yaml (e.g. renamed) —
    // fall back to the first real camera so first-time visitors still see
    // a populated example table instead of an empty one.
    $options[1].selected = true;
  }
  // else: an explicit ?camera= URL didn't match anything — leave
  // "- select camera -" selected so updatePitch() renders the empty
  // state instead of crashing.
};

function runIfIdExists(id, func) {
  const element = document.getElementById(id);
  if (element) {
    func(element); 
  }
}

window.onload = function() {
  runIfIdExists("diff-table", loadDefaultCamera);
  runIfIdExists("diff-table", updatePitch);
};

function initializeCameraTable() {
  const table = document.getElementById("camera-table");
  const controls = document.getElementById("camera-controls");
  if (!table || !controls) return;

  const rows = Array.from(table.tBodies[0].rows);
  const search = document.getElementById("camera-search");
  const format = document.getElementById("camera-format");
  const resetButton = document.getElementById("camera-reset");
  const results = document.getElementById("camera-results");
  const sortButtons = Array.from(document.querySelectorAll(".camera-sort-button"));
  let sortField = "camera";
  let direction = "asc";

  const getRowValue = (row, field) => row.dataset[field];

  function updateSortHeaders() {
    sortButtons.forEach((button) => {
      const isActive = button.dataset.sort === sortField;
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
      button.parentElement.setAttribute("aria-sort", isActive ? (direction === "asc" ? "ascending" : "descending") : "none");
    });
  }

  function updateUrl() {
    const url = new URL(window.location.href);
    const values = {
      q: search.value.trim(),
      format: format.value,
      sort: sortField === "camera" ? "" : sortField,
      direction: direction === "asc" ? "" : direction
    };

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
    });
    ["megapixels-min", "megapixels-max", "pitch-min", "pitch-max"].forEach((key) => url.searchParams.delete(key));
    history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function applyControls() {
    const searchTerm = search.value.trim().toLocaleLowerCase();
    let visible = 0;

    rows.forEach((row) => {
      const matches = (!searchTerm || row.dataset.camera.toLocaleLowerCase().includes(searchTerm))
        && (!format.value || row.dataset.format === format.value);
      row.hidden = !matches;
      if (matches) visible += 1;
    });

    rows.sort((first, second) => {
      let comparison;
      if (sortField === "camera" || sortField === "format") {
        comparison = getRowValue(first, sortField).localeCompare(getRowValue(second, sortField), undefined, { numeric: true });
      } else {
        comparison = Number(getRowValue(first, sortField)) - Number(getRowValue(second, sortField));
      }
      if (comparison === 0) comparison = Number(first.dataset.index) - Number(second.dataset.index);
      return direction === "asc" ? comparison : -comparison;
    });
    rows.forEach((row) => table.tBodies[0].appendChild(row));

    results.textContent = `${visible} ${visible === 1 ? "camera" : "cameras"}${visible === rows.length ? "" : " matching filters"}`;
    updateSortHeaders();
    updateUrl();
  }

  function loadUrlState() {
    const params = new URLSearchParams(window.location.search);
    search.value = params.get("q") || "";
    format.value = params.get("format") || "";
    sortField = params.get("sort") || "camera";
    direction = params.get("direction") === "desc" ? "desc" : "asc";
  }

  controls.addEventListener("submit", (event) => event.preventDefault());
  controls.addEventListener("input", applyControls);
  controls.addEventListener("change", applyControls);
  sortButtons.forEach((button) => button.addEventListener("click", () => {
    direction = button.dataset.sort === sortField && direction === "asc" ? "desc" : "asc";
    sortField = button.dataset.sort;
    applyControls();
  }));
  resetButton.addEventListener("click", () => {
    window.setTimeout(() => {
      sortField = "camera";
      direction = "asc";
      applyControls();
    });
  });

  loadUrlState();
  applyControls();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeCameraTable);
} else {
  initializeCameraTable();
}
