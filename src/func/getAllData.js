import getDataSteam from "./getDataSteam.js";
import getDataEpicGames from "./getDataEpicGames.js";
import uploadDataToDB from "../../database/func/uploadDataToDB.js";

const getAllData = async () => {
  const steam = await getDataSteam();
  const epicGames = await getDataEpicGames();
  const data = [...epicGames, ...steam];
  console.table(data);
  uploadDataToDB(data);
};

export default getAllData;
