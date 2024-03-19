import { render, screen } from "@testing-library/react-native";

import { day } from "@__tests__/mocks/components/day";

import Day from ".";

describe("Component: Day", () => {
  it("Should be render day.", () => {
    render(<Day data={day} />);

    expect(screen.getByText("19/03")).toBeTruthy();
  });
});
