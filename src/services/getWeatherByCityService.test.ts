import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse";

import { api } from "./api";

import { getWeatherByCityService } from "./getWeatherByCityService";

describe("API: getWeatherByCityService", () => {
  it("Should be return weather api data formatted.", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 456,
    });

    expect(response).toHaveProperty("today");
  });
});
