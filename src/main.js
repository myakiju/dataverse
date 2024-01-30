import { renderItems, renderSunExposureOptions } from "./view.js";
import {
  filterPlants,
  orderByNameAsc,
  orderByWaterDaysAsc,
  orderByNameDesc,
  orderByWaterDaysDesc,
} from "./dataFunctions.js";

import data from "./data/dataset.js";

const plantsContainer = document.getElementById("root");

const getPlantList = (data) => {
  plantsContainer.innerHTML = renderItems(data);
};

getPlantList(data);
renderSunExposureOptions(data);

document.getElementById("filters").addEventListener("change", (e) => {
  let plantsData = [...data];
  const value = e.target.value;
  if (value !== "todos") {
    plantsData = filterPlants(data, "sunExposure", value);
  }
  plantsContainer.innerHTML = "";
  getPlantList(plantsData);
});

document.getElementById("order").addEventListener("change", (e) => {
  const plantsData = [...data];
  let orderedPlants = [];
  const value = e.target.value;
  if (value.includes("name")) {
    if (value.includes("desc")) {
      orderedPlants = plantsData.sort(orderByNameDesc);
    } else {
      orderedPlants = plantsData.sort(orderByNameAsc);
    }
  } else if (value.includes("water")) {
    if (value.includes("desc")) {
      orderedPlants = plantsData.sort(orderByWaterDaysDesc);
    } else {
      orderedPlants = plantsData.sort(orderByWaterDaysAsc);
    }
  }

  plantsContainer.innerHTML = "";
  getPlantList(orderedPlants);
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("filters").value = "todos";
  document.getElementById("order").value = "todos";
  const plantsData = [...data];
  plantsContainer.innerHTML = "";
  getPlantList(plantsData);
});
