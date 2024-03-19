import { act, screen, waitFor } from "@testing-library/react-native";

import { render } from "@__tests__/utils/customRender";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

import { saveStorageCity } from "@libs/asyncStorage/cityStorage";

import { api } from "@services/api";

import { Routes } from ".";

describe("Routes", () => {
  it("Should be render Search screen when not city selected.", async () => {
    await act(() => waitFor(() => render(<Routes />)));

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });

  it("Shoul be render Dashboard screen when has city selected.", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "São Paulo",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    await act(() => waitFor(() => render(<Routes />)));

    render(<Routes />);
  });
});
