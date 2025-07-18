const today = new Date();
const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = today.getFullYear();

const lastMofified = document.querySelector("#lastModified");
lastModified.textContent = `Last modified: ${document.lastModified}`;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

function getWindChillDisplay(temp, speed) {
    return (temp <= 10 && speed > 4.8)
        ? `${calculateWindChill(temp, speed).toFixed(1)} °C`
        : 'N/A';
}

// Example values from the HTML
let temperature = 26;
let windSpeed = 5;   

document.getElementById("windChill").textContent = "Wind Chill: " + getWindChillDisplay(temperature, windSpeed);