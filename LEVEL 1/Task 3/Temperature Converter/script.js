document.getElementById('convert-btn').addEventListener('click', function() {
    // Get the input values
    const inputTemperature = document.getElementById('degree').value;
    const selectedUnit = document.getElementById('temp-type').value;

    // Validate that the input is a number
    if (isNaN(inputTemperature) || inputTemperature === '') {
        alert('Please enter a valid number');
        return;
    }

    // Parse the input temperature to a float
    const temperature = parseFloat(inputTemperature);
    let resultCelsius, resultFahrenheit, resultKelvin;

    // Perform the conversion based on the selected unit
    switch (selectedUnit) {
        case 'cel':
            resultCelsius = temperature;
            resultFahrenheit = (temperature * 9/5) + 32;
            resultKelvin = temperature + 273.15;
            break;
        case 'fah':
            resultCelsius = (temperature - 32) * 5/9;
            resultFahrenheit = temperature;
            resultKelvin = (temperature - 32) * 5/9 + 273.15;
            break;
        case 'kel':
            resultCelsius = temperature - 273.15;
            resultFahrenheit = (temperature - 273.15) * 9/5 + 32;
            resultKelvin = temperature;
            break;
    }

    // Display the results
    document.getElementById('cel').innerHTML = 
        `Celsius: ${resultCelsius.toFixed(2)} °C<br>` + 
        `Fahrenheit: ${resultFahrenheit.toFixed(2)} °F<br>` + 
        `Kelvin: ${resultKelvin.toFixed(2)} K`;
});
