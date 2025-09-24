// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Function
function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

// Weather Data (static test values)
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

// Display Wind Chill
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("windChill").textContent = windChill;
