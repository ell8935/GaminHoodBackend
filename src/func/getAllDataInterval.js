import getAllData from "./getAllData.js";

const getAllDataInterval = () => {
  getAllData();
  const minutes = 60 * 60 * 1000;
  setInterval(() => {
    fetchGames();
  }, minutes);
};

export default getAllDataInterval;
