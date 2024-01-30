import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import NavPagination from "./components/NavPagination/NavPagination.js";
import NavButton from "./components/NavButton/NavButton.js";

const searchBar = SearchBar({ onSubmit: handleSearchBarSubmit });

/* const bookmarkButton = Bookmark({
  active: props.isBookmarked,
  onClick: handleBookmarkButtonClick,
});
 */
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
searchBarContainer.append(searchBar);
const cardContainer = document.querySelector('[data-js="card-container"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = NavButton("prev", "previous");
const nextButton = NavButton("next", "next");
const pagination = NavPagination();
navigation.append(prevButton, pagination, nextButton);

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

function handleSearchBarSubmit(event) {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  console.log(searchQuery);
  fetchCharacters();
}

/* function handleBookmarkButtonClick(event) {
  cards.find((card) => card.question === props.question).isBookmarked =
    !props.isBookmarked;
  // To prevent the need to rerender, we can just toggle the class here
  event.currentTarget.classList.toggle("bookmark--active");
} */
