const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("cv-theme");

if (savedTheme === "dark") document.body.classList.add("dark");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "cv-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();
