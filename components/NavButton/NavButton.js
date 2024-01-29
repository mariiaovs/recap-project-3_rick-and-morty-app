import { fetchCharacters, page } from "../../index.js";

const nextButton = document.querySelector('[data-js="button-next"]');
const prevButton = document.querySelector('[data-js="button-prev"]');

console.log(page);

nextButton.addEventListener("click", () => {
  page++;
  if (page > data.info.pages || page < 1) {
    return;
  } else {
    console.log("next", page);
    fetchCharacters();
  }
});
