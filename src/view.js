export const renderItems = (plants) => {
  const elements = plants.map(
    (
      plant
    ) => `<li class="card" data-id="${plant.id}" itemscope itemtype="https://schema.org/Thing">
                  <picture class="img-overflow">
                    <img itemprop="image" src="./static/${plant.id}.jpg" />
                    <figcaption>${plant.name}</figcaption>
                  </picture>
                  <dd itemprop="name">${plant.name}</dd>
                  <dd itemprop="description">
                  ${plant.shortDescription}
                  </dd>
                </li>
  `
  );
  return `<ul class="plants-flex">${elements.join("")}</ul>`;
};
