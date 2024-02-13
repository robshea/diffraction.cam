function updatePitch() {
  // Get the selected value from the "camera" select field
  const pitchValue = document.querySelector('#camera').value;
  // Update the value of the "pitch" input field
  document.getElementById("pitch").value = pitchValue;
}
