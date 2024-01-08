//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Backspace') {
      event.preventDefault();
      if (input.value) {
        input.value = '';
        inputs[index - 1].focus();
      }
    } else if (key.length === 1 && !isNaN(key)) {
      if (input.value.length < 1) {
        input.value = key;
        inputs[index + 1].focus();
      }
    } else {
      event.preventDefault();
    }
  });
});
