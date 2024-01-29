import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
let page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  try {
    cardContainer.innerHTML = "";
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    data.results.forEach((result) => {
      
      const card = CharacterCard(result);
      cardContainer.append(card);
      pagination.textContent = `${page} / ${data.info.pages}`;
      maxPage = data.info.pages;
    });
  } catch (error) {
    console.error(error);
  }
}
fetchCharacters();

nextButton.addEventListener("click", () => {
  if (page === maxPage) {
    return;
  } else {
    page++;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  if (page === 1) {
    return;
  } else {
    page--;
    fetchCharacters();
  }
});
