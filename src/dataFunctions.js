export const filterPlants = (plants, filterBy, value) => {
  const result = plants.filter((plant) =>
    plant.facts[filterBy].includes(value)
  );
  return result;
};
