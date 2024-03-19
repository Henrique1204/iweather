import clearDay from "@assets/clear_day.svg";

export const day = {
  day: "19/03",
  min: "30°C",
  max: "34°C",
  icon: clearDay,
  weather: "Céu limpo",
};

export const days = ["19/03", "20/03", "21/03", "22/03", "23/03"].map(
  (dayString) => ({
    ...day,
    day: dayString,
  })
);
