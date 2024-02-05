import { renderItems, renderSunExposureOptions } from "./view.js";
import { filterBy, sortData, computeStats } from "./dataFunctions.js";

import data from "./data/dataset.js";

const plantsContainer = document.querySelector("#root");
const selectFilter = document.querySelector("#select-filter");
const selectSort = document.querySelector("#select-sort");
let filteredData = [];

const renderPlantsList = (data) => {
  plantsContainer.innerHTML = renderItems(data);
};

renderPlantsList(data);
renderSunExposureOptions(data);
computeStats(data);

selectFilter.addEventListener("change", (e) => {
  if (filteredData.length === 0) {
    filteredData = [...data];
  }

  const value = e.target.value;
  if (value !== "todos") {
    filteredData = filterBy(data, "sunExposure", value);
  } else {
    filteredData = [...data];
  }
  plantsContainer.innerHTML = "";
  renderPlantsList(filteredData);
});

selectSort.addEventListener("change", (e) => {
  if (filteredData.length === 0) {
    filteredData = [...data];
  }

  let orderedPlants = [];
  const value = e.target.value;

  orderedPlants = sortData(value, filteredData);

  plantsContainer.innerHTML = "";
  renderPlantsList(orderedPlants);
});

document.getElementById("button-clear").addEventListener("click", () => {
  selectFilter.value = "todos";
  selectSort.value = "todos";
  const plantsData = [...data];
  filteredData = [];
  plantsContainer.innerHTML = "";
  renderPlantsList(plantsData);
});
