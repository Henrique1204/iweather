import { render, screen } from "@testing-library/react-native";

import { days } from "@__tests__/mocks/components/day";

import NextDays from ".";

describe("Component: NextDays", () => {
  it("Should be render next days.", () => {
    render(<NextDays data={days} />);

    expect(screen.getByText(days[0].day)).toBeTruthy();
  });
});
