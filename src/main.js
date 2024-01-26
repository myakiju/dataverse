import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const plantsContainer = document.getElementById("root");

const getPlantList = (data) => {
  plantsContainer.innerHTML = renderItems(data);
};

getPlantList(data);
