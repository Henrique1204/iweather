import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

import { api } from "./api";

import { getCityByNameService } from "./getCityByNameService";

describe("API: getCityByNameService", () => {
  it("Should return city details.", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const response = await getCityByNameService(mockCityAPIResponse.name);

    expect(response.length).toBeGreaterThan(0);
  });
});
