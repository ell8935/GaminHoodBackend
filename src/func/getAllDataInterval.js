import getAllData from "./getAllData.js";

const minutes = 0.3 * 60 * 1000;

const getAllDataInterval = () => {
  setInterval(getAllData, minutes);
};

export default getAllDataInterval;
