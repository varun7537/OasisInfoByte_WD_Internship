document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '';
    let lastAnswer = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            switch (value) {
                case 'clear':
                    displayValue = '';
                    display.value = displayValue;
                    break;
                case 'del':
                    displayValue = displayValue.slice(0, -1);
                    display.value = displayValue;
                    break;
                case 'ans':
                    displayValue += lastAnswer;
                    display.value = displayValue;
                    break;
                case 'ENTER':
                    try {
                        // Replace 'π' and '√' with their corresponding JavaScript functions
                        displayValue = displayValue.replace(/π/g, 'Math.PI').replace(/√/g, 'Math.sqrt');
                        lastAnswer = eval(displayValue);
                        display.value = lastAnswer;
                        displayValue = lastAnswer.toString();
                    } catch (error) {
                        display.value = 'Error';
                        displayValue = '';
                    }
                    break;
                default:
                    displayValue += value;
                    display.value = displayValue;
            }
        });
    });
});
