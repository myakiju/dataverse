import { renderItems, renderSunExposureOptions } from "./view.js";
import { filterPlants } from "./dataFunctions.js";

import data from "./data/dataset.js";

const plantsContainer = document.getElementById("root");

const getPlantList = (data) => {
  plantsContainer.innerHTML = renderItems(data);
};

getPlantList(data);
renderSunExposureOptions(data);

document.querySelector("#filters").addEventListener("change", (e) => {
  let plantsData = [...data];
  const value = e.target.value;
  if (value === "-- todos --") {
    plantsData = [...data];
  } else {
    plantsData = filterPlants(data, "sunExposure", value);
  }
  plantsContainer.innerHTML = "";
  getPlantList(plantsData);
});
