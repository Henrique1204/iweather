import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  const FIXED_DATES = {
    MIDDLE_OF_MONTH: new Date("2024-03-19T00:00:00"),
    END_OF_MONTH: new Date("2024-03-29T00:00:00"),
  };

  afterAll(() => {
    jest.clearAllTimers();
  });

  it("Should return the next five days starting from the middle of the month.", () => {
    jest.useFakeTimers().setSystemTime(FIXED_DATES.MIDDLE_OF_MONTH);

    const days = getNextDays();

    expect(days).toHaveLength(5);

    const [firstDay, secondDay, thirdDay, fourthDay, fifthDay] = days;

    expect(firstDay).toEqual("20/03");
    expect(secondDay).toEqual("21/03");
    expect(thirdDay).toEqual("22/03");
    expect(fourthDay).toEqual("23/03");
    expect(fifthDay).toEqual("24/03");
  });

  it("Should return the next five days starting from the end of the month.", () => {
    jest.useFakeTimers().setSystemTime(FIXED_DATES.END_OF_MONTH);

    const days = getNextDays();

    expect(days).toHaveLength(5);

    const [firstDay, secondDay, thirdDay, fourthDay, fifthDay] = days;

    expect(firstDay).toEqual("30/03");
    expect(secondDay).toEqual("31/03");
    expect(thirdDay).toEqual("01/04");
    expect(fourthDay).toEqual("02/04");
    expect(fifthDay).toEqual("03/04");
  });
});
