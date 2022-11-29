import uploadDataToDB from "../../database/func/uploadDataToDB.js";
import getDataEpicGames from "./getDataEpicGames.js";
import getDataSteam from "./GetDataSteam.js";

const getAllData = async () => {
  const steam = await getDataSteam();
  const epicGames = await getDataEpicGames();
  const data = [...epicGames, ...steam];
  uploadDataToDB(data);
};

export default getAllData;
