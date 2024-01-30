export const filterPlants = (plants, filterBy, value) => {
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

export const orderByWaterDaysAsc = (a, b) => {
  return a.facts["waterIntervalInDays"] < b.facts["waterIntervalInDays"]
    ? -1
    : 1;
};

export const orderByWaterDaysDesc = (a, b) => {
  return a.facts["waterIntervalInDays"] < b.facts["waterIntervalInDays"]
    ? 1
    : -1;
};
