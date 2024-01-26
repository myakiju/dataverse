export const renderItems = (plants) => {
  const elements = plants.map(
    (
      plant
    ) => `<li class="plants__card" data-id="${plant.id}" itemscope itemtype="https://schema.org/Thing">
            <div class="plants__card__image">
                <img itemprop="image" alt="${plant.name} - ${plant.shortDescription}" src="./static/${plant.id}.jpg" />
            </div>
            <div class="plants__card__info">
              <h4 itemprop="name">${plant.name}</h4>
              <p itemprop="description">${plant.shortDescription}</p>
            </div>
          </li>
  `
  );
  return `<ul class="plants">${elements.join("")}</ul>`;
};
