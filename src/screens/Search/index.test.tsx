import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@__tests__/utils/customRender";

import { api } from "@services/api";

import { Search } from ".";

describe("Screen: Search", () => {
  it("Should be show city option.", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    render(<Search />);

    const searchInput = screen.getByTestId("select-list-input");

    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => screen.findByText(/são paulo/i));

    expect(option).toBeTruthy();
  });
});


