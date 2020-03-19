const toggleColorMode = e => {
  // Switch to Light Mode
  if (e.currentTarget.classList.contains("light--hidden")) {
    // Sets the custom html attribute
    document.documentElement.setAttribute("color-mode", "light");

    // Sets the user's preference in local storage
    localStorage.setItem("color-mode", "light");
    return;
  }

  /* Switch to Dark Mode
  Sets the custom html attribute */
  document.documentElement.setAttribute("color-mode", "dark");

  // Sets the user's preference in local storage
  localStorage.setItem("color-mode", "dark");
};

// Get the buttons in the DOM
const toggleColorButtons = document.querySelectorAll(".color-mode__btn");

// Set up event listeners
toggleColorButtons.forEach(btn => {
  btn.addEventListener("click", toggleColorMode);
});
