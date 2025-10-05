// Increment review count in localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

// Display it on the page
document.getElementById("reviewCount").textContent = reviewCount;

// Footer info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
