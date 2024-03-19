import { render, screen } from "@testing-library/react-native";

import clearDay from "@assets/clear_day.svg";

import Day from ".";

describe("Component: Day", () => {
  it("Should be render day.", () => {
    render(
      <Day
        data={{
          day: "19/03",
          min: "30°C",
          max: "34°C",
          icon: clearDay,
          weather: "Céu limpo",
        }}
      />
    );

    expect(screen.getByText("19/03")).toBeTruthy();
  });
});
