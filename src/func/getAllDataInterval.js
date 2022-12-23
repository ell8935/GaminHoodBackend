import getAllData from "./getAllData.js";

const getAllDataInterval = () => {
  getAllData();
  const minutes = 20 * 60 * 1000;
  setInterval(() => {
    getAllDataInterval();
  }, minutes);
};

export default getAllDataInterval;
