import { renderItems, renderSunExposureOptions } from "./view.js";
import { filterBy, orderByName, computeStats } from "./dataFunctions.js";

import data from "./data/dataset.js";

const plantsContainer = document.querySelector("#root");
const selectFilter = document.querySelector("#select-filter");
const selectSort = document.querySelector("#select-sort");

const renderPlantsList = (data) => {
  plantsContainer.innerHTML = renderItems(data);
};

renderPlantsList(data);
renderSunExposureOptions(data);
computeStats(data);

selectFilter.addEventListener("change", (e) => {
  let plantsData = [...data];
  const value = e.target.value;
  if (value !== "todos") {
    plantsData = filterBy(data, "sunExposure", value);
  }
  plantsContainer.innerHTML = "";
  renderPlantsList(plantsData);
});

selectSort.addEventListener("change", (e) => {
  const plantsData = [...data];
  let orderedPlants = [];
  const value = e.target.value;

  orderedPlants = orderByName(value, plantsData);

  plantsContainer.innerHTML = "";
  renderPlantsList(orderedPlants);
});

document.getElementById("button-clear").addEventListener("click", () => {
  selectFilter.value = "todos";
  selectSort.value = "todos";
  const plantsData = [...data];
  plantsContainer.innerHTML = "";
  renderPlantsList(plantsData);
});
