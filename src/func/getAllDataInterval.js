import getAllData from "./getAllData.js";

const getAllDataInterval = () => {
  getAllData();
  const minutes = 10 * 60 * 1000;
  setInterval(() => {
    getAllDataInterval();
  }, minutes);
};

export default getAllDataInterval;
