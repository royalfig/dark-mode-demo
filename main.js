const root = document.documentElement;

// Define a function to
const toggleColorMode = e => {
  if (e.currentTarget.classList.contains("light")) {
    root.setAttribute("color-mode", "light");
    localStorage.setItem("color-pref", "light");
    return;
  }
  root.setAttribute("color-mode", "dark");
  localStorage.setItem("color-pref", "dark");
};

const toggleColorButtons = document.querySelectorAll(".color-mode__btn");

toggleColorButtons.forEach(btn => {
  btn.addEventListener("click", toggleColorMode);
});
