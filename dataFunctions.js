export const filterBy = (plants, filterBy, value) => {
  const result = plants.filter((plant) =>
    plant.facts[filterBy].includes(value)
  );
  return result;
};

export const orderByNameAsc = (a, b) => {
  return a.name.localeCompare(b.name);
};
export const orderByNameDesc = (a, b) => {
  return a.name.localeCompare(b.name) * -1;
};

export const sortData = (value, plantsData) => {
  let orderedPlants = [];
  if (value.includes("desc")) {
    orderedPlants = plantsData.sort(orderByNameDesc);
  } else {
    orderedPlants = plantsData.sort(orderByNameAsc);
  }
  return orderedPlants;
};

export const computeStats = (plantsData) => {
  const waterDays = plantsData.map((plant) =>
    parseInt(plant.facts.waterIntervalInDays)
  );
  const totalWaterDays = waterDays.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log("totalWaterDays " + totalWaterDays);
  console.log("waterDays.length " + waterDays.length);
  return totalWaterDays / waterDays.length;
};
