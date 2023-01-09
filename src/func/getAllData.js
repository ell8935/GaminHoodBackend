import uploadDataToDB from "../../database/func/uploadDataToDB.js";
import getDataEpicGames from "./getDataEpicGames.js";
import getDataSteam from "./getDataSteam.js";

const getAllData = async () => {
  const steam = await getDataSteam();
  const epicGames = await getDataEpicGames();
  const data = [...epicGames, ...steam];
  console.log(data);
  uploadDataToDB(data);
};

export default getAllData;
