import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import NavPagination from "./components/NavPagination/NavPagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = SearchBar();
document.body.append(searchBarContainer);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = NavPagination();
navigation.append(pagination);

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

export async function fetchCharacters() {
  try {
    cardContainer.innerHTML = "";
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
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

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  searchQuery = event.target.elements.query.value;
  console.log(searchQuery);
  fetchCharacters();
});
