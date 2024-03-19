import { render, screen } from "@testing-library/react-native";

import dropIcon from "@assets/drop.svg";

import WeatherItem from ".";

describe("Component: WeatherItem", () => {
  it("Should be show title and value.", () => {
    render(<WeatherItem title="Umidade do ar" icon={dropIcon} value="81%" />);

    const title = screen.getByText("Umidade do ar");
    const value = screen.getByText("81%");

    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
