document.getElementById("celsiusToF&K").addEventListener("click", function () {
    const celsiusInput = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsiusInput * 9/5) + 32;
    const kelvin = (celsiusInput + 273.15);
    document.getElementById("resultC").textContent = `${celsiusInput.toFixed(2)}°C is equivalent to  ${fahrenheit.toFixed(2)}°F  and  ${kelvin.toFixed(2)}K`;
});

    document.getElementById("fahrenheitToC&K").addEventListener("click", function () {
    const fahrenheitInput = parseFloat(document.getElementById("fahrenheit").value);
    const celsius = (fahrenheitInput - 32) * 5/9;
    const kelvin = ((fahrenheitInput - 32) * 5/9) + 273.15;
    document.getElementById("resultF").textContent = `${fahrenheitInput.toFixed(2)}°F is equivalent to ${celsius.toFixed(2)}°C  and   ${kelvin.toFixed(2)}K`;
});

    document.getElementById("kelvinToC&F").addEventListener("click", function () {
    const kelvinInput = parseFloat(document.getElementById("kelvin").value);
    const celsius = (kelvinInput - 273.15);
    const  fahrenheit = ((kelvinInput - 273.15) * 9/5) + 32;
    document.getElementById("resultK").textContent = `${kelvinInput.toFixed(2)}K is equivalent to ${celsius.toFixed(2)}°C  and   ${fahrenheit.toFixed(2)}°F`;
});