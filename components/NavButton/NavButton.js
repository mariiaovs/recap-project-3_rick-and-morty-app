export default function NavButton(props) {
  const navButton = document.createElement("button");
  navButton.classList.add("button");
  navButton.classList.add(`button--${props.name}`);

  navButton.textContent = `${props.text}`;

  navButton.addEventListener("click", props.onClick);

  return navButton;
}
