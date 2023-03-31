import getAllData from "./getAllData.js";

const minutes = 15 * 60 * 1000;

const getAllDataInterval = () => {
  getAllData();
  setInterval(getAllData, minutes);
};

export default getAllDataInterval;
