import { uploadDataToDB } from "../shared/services/realTimeDatabase.js";
import getDataSteam from "./steam/getDataSteam.js";
import getDataEpicGames from "./epicGames/getDataEpicGames.js";

//Getting data from Steam and Epic Games and uploading to the DB

export const getAllData = async () => {
  const steam = await getDataSteam();
  const epicGames = await getDataEpicGames();
  const data = [...epicGames, ...steam];
  console.log(data);
  uploadDataToDB(data);
};

//Interval to get the data

const minutes = 15 * 60 * 1000; //15min

export const getAllDataInterval = () => {
  getAllData();
  setInterval(getAllData, minutes);
};
