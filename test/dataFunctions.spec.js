import { filterBy, sortData, computeStats } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("filterData test - valida busca por um campo específico", () => {
  it('A lista de plantas exibe somente as plantas com o sunExposure = "Sol pleno" ', () => {
    const filterField = "sunExposure";
    const value = "Sol pleno";

    const result = filterBy(fakeData, filterField, value);

    expect(result).toHaveLength(2);
    expect(
      result.every((plant) => plant.facts[filterField].includes(value))
    ).toBe(true);
  });

  it("Não exibe nada quando o valor filtrado não existir", () => {
    const filterField = "sunExposure";
    const value = "Atmosfera de Marte";

    const result = filterBy(fakeData, filterField, value);

    expect(result).toHaveLength(0);
  });
});

describe("sortDat test - Valida ordenações", () => {
  const getNames = (plants) => plants.map((plant) => plant.name);

  it("Deve retornar uma lista ordenada por nome em ordem crescente", () => {
    const sortedData = sortData("asc", [...fakeData]);
    const namesOrdered = getNames(sortedData);
    const expectedOrder = namesOrdered
      .slice()
      .sort((a, b) => a.localeCompare(b));
    expect(namesOrdered).toEqual(expectedOrder);
  });

  it("Deve retornar uma lista ordenada por nome em ordem decrescente", () => {
    const sortedData = sortData("desc", [...fakeData]);
    const namesOrdered = getNames(sortedData);
    const expectedOrder = namesOrdered
      .slice()
      .sort((a, b) => a.localeCompare(b) * -1);
    expect(namesOrdered).toEqual(expectedOrder);
  });
});

describe("computeStats test", () => {
  it("A média de tempo de rega de todas as plantas", () => {
    expect(computeStats(fakeData)).toBe(12.25);
  });
});
