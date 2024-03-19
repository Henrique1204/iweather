import { render, screen } from "@testing-library/react-native";

import Input from ".";

describe("Component: Input", () => {
  it("Should be render without activity indicator if isLoading prop is undefined.", () => {
    render(<Input />);

    expect(screen.queryByTestId('input-activity-indicator')).toBeNull();
  });

  it("Should be render with activity indicator if isLoading prop is true.", () => {
    render(<Input isLoading />);

    expect(screen.getByTestId('input-activity-indicator')).toBeTruthy();
  });
});
