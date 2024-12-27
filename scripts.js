const colorScheme = document.querySelector("meta[name=color-scheme]");
const switchButtons = document.querySelectorAll("button");

switchButtons.forEach((switchButton) => {
  switchButton.addEventListener("click", onThemeToggleClick);
});

initializeTheme();

function onThemeToggleClick(event) {
  const currentButton = event.target;

  switchButtons.forEach((button) =>
    button.setAttribute("aria-pressed", button === currentButton),
  );

  colorScheme.content = currentButton.value;
  localStorage.setItem("theme", currentButton.value);
}

function initializeTheme() {
  const theme = localStorage.getItem("theme");
  colorScheme.content = theme;

  switchButtons.forEach((button) =>
    button.setAttribute("aria-pressed", button.value === theme),
  );
}
