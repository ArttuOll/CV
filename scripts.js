const colorScheme = document.querySelector("meta[name=color-scheme]");
const switchButtons = document.querySelectorAll("button");

colorScheme.content = localStorage.getItem("theme");

switchButtons.forEach((switchButton) => {
  switchButton.addEventListener("click", onThemeToggleClick);
});

function onThemeToggleClick(event) {
  const currentButton = event.target;

  switchButtons.forEach((button) =>
    button.setAttribute("aria-pressed", button === currentButton),
  );

  colorScheme.content = currentButton.value;
  localStorage.setItem("theme", currentButton.value);
}
