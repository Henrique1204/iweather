import { CityProps } from "@services/getCityByNameService";

import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

describe("Storage: cityStorage", () => {
  const newCity: CityProps = {
    id: "1",
    latitude: 123,
    longitude: 456,
    name: "São Paulo",
  };

  it("Should be return null when don't have a city storaged.", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("Should be return city storaged.", async () => {
    await saveStorageCity(newCity);

    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("Should be remove city storaged.", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
