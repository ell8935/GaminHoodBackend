const getDateEpicGames = (time) => {
  const date =
    "Free Now - " +
    new Date(time.endDate).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return date;
};

export default getDateEpicGames;
