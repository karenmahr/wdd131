const today = new Date();
const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = today.getFullYear();

const lastMofified = document.querySelector("#lastModified");
lastModified.textContent = `Last modified: ${document.lastModified}`;
