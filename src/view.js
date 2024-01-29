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

export const renderSunExposureOptions = (plants) => {
  const elements = removeDuplicates(
    plants.map((plant) => plant.facts.sunExposure)
  );

  elements.forEach(function (element) {
    addOptions("filters", element);
  });
};

function removeDuplicates(list) {
  return list.sort().filter((item, index) => list.indexOf(item) === index);
}

function addOptions(parentId, optionValue) {
  const parent = document.getElementById(parentId);
  const option = new Option(optionValue);
  parent.appendChild(option);
}
