import { fireEvent, render, screen } from "@testing-library/react-native";

import SelectList from ".";

describe("Component: SelectList", () => {
  const dataMock = [
    { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
    { id: "2", name: "Campo Grande", latitude: 789, longitude: 101 },
  ];

  const onChangeMock = jest.fn();
  const onPressMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("Should be return city details selected.", () => {
    render(
      <SelectList
        data={dataMock}
        onChange={onChangeMock}
        onPress={onPressMock}
      />
    );

    const [firstCityData, secondCityData] = dataMock;

    const firstCityElement = screen.getByText(firstCityData.name);
    const secondCityElement = screen.getByText(secondCityData.name);

    expect(firstCityElement).toBeTruthy();
    expect(secondCityElement).toBeTruthy();

    fireEvent.press(firstCityElement);

    expect(onPressMock).toHaveBeenCalledTimes(1);
    expect(onPressMock).toHaveBeenCalledWith(firstCityData);

    fireEvent.press(secondCityElement);

    expect(onPressMock).toHaveBeenCalledTimes(2);
    expect(onPressMock).toHaveBeenCalledWith(secondCityData);
  });

  it("Not should be show options when data props is empty.", () => {
    render(
      <SelectList data={[]} onChange={onChangeMock} onPress={onPressMock} />
    );

    const options = screen.queryAllByTestId(/select-list-item/g);

    expect(options).toHaveLength(0);
  });
});
