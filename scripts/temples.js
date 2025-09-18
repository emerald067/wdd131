// dynamic copyright
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// last modified
document.querySelector("#lastModified").textContent = "Last Modification: " + document.lastModified;

// --- Hamburger Menu ---
const menuButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  // Change button symbol depending on state
  if (nav.classList.contains("open")) {
    menuButton.textContent = "✖"; // Close icon
  } else {
    menuButton.textContent = "☰"; // Hamburger icon
  }
});
