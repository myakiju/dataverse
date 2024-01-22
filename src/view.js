export const renderItems = (plants) => {
  const elements = plants.map(
    (
      plant
    ) => `<li data-id="${plant.id}" itemscope itemtype="https://schema.org/Thing">
                  <picture class="img-overflow">
                    <img itemprop="image" src="./static/${plant.id}.jpg" />
                    <figcaption>${plant.name}</figcaption>
                  </picture>
                  <h3 itemprop="name">${plant.name}</h3>
                  <p itemprop="description">
                  ${plant.shortDescription}
                  </p>
                </li>
  `
  );
  return `<ul class="card">${elements.join("")}</ul>`;
};
