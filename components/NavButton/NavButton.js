export default function NavButton(name, text) {
  const navButton = document.createElement("button");
  navButton.classList.add("button");
  navButton.classList.add(`button--${name}`);

  navButton.textContent = `${text}`;
  return navButton;
}
