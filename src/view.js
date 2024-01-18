export const renderItems = (plants) => {
  const plantsContainer = document.querySelector(".plants-container");

  if (plants.length > 0) {
    plants.forEach((plant) => {
      const card = createElement("article", plantsContainer, "card");

      const divImg = createElement("div", card, "img-overflow");
      const cardImg = createElement("img", divImg);
      cardImg.src = `./static/${plant.id}.jpg`;
      const h3Name = createElement("h3", card);
      h3Name.textContent = plant.name;
      const pDescription = createElement("p", card);
      pDescription.textContent = plant.shortDescription;
    });
  }
};

// createElement helper function
function createElement(type, parent, classList) {
  const element = document.createElement(type);
  if (classList !== undefined) {
    typeof classList === "object" && classList.length > 0
      ? element.classList.add(...classList)
      : (element.className = classList);
  }
  parent.append(element);
  return element;
}
