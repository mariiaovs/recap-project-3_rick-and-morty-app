export function CharacterCard(name, status, type, occurrence) {
  const card = document.createElement("li");
  card.innerHTML = `<div class="card__image-container">
  <img
    class="card__image"
    ${src}
    alt="Rick Sanchez"
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${name}</h2>
  <dl class="card__info">
    <dt class="card__info-title">${status}</dt>
    <dd class="card__info-description">Alive</dd>
    <dt class="card__info-title">${type}</dt>
    <dd class="card__info-description"></dd>
    <dt class="card__info-title">${occurrence}</dt>
    <dd class="card__info-description">51</dd>
  </dl>
</div>`;

  return card;
}
