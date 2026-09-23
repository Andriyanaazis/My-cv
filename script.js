const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("cv-theme");


// =========================
// LOAD SAVED THEME
// =========================

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}


// =========================
// THEME TOGGLE
// =========================

if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const currentTheme =
      document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem(
      "cv-theme",
      currentTheme
    );

  });

}


// =========================
// CURRENT YEAR
// =========================

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}
