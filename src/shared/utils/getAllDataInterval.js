import getAllData from "./getAllData.js";

const minutes = 30 * 60 * 1000;

const getAllDataInterval = () => {
  setInterval(getAllData, minutes);
};

export default getAllDataInterval;
