//your JS code here. If required.
function handleInput(input) {
    const maxLength = parseInt(input.getAttribute('maxlength'));

    if (input.value.length === maxLength) {
        const nextInput = input.nextElementSibling;

        if (nextInput) {
            nextInput.focus();
        }
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace') {
        const focusedInput = document.activeElement;

        if (focusedInput.classList.contains('code')) {
            const previousInput = focusedInput.previousElementSibling;

            if (previousInput) {
                previousInput.focus();
                previousInput.value = ''; // Clear the value of the previous input
            }
        }
    }
});
