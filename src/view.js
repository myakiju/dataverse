export const renderItems = (plants) => {
  const plantsContainer = document.querySelector(".plants-container");

  console.log("aquiiii");

  if (plants.length > 0) {
    plants.forEach((plant) => {
      const dlPlant = createElement("dl", plantsContainer);
      const dtNome = createElement("dt", dlPlant);
      dtNome.textContent = "Nome";
      const ddNome = createElement("dd", dlPlant);
      ddNome.textContent = plant.name;
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
