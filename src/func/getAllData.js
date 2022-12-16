import uploadDataToDB from "../../database/func/uploadDataToDB.js";
import getDataEpicGames from "./getDataEpicGames.js";
import getDataSteam from "./getDataSteam.js";

const getAllData = async () => {
  const steam = await getDataSteam();
  const epicGames = await getDataEpicGames();
  console.log(epicGames);
  const data = [...epicGames, ...steam];
  uploadDataToDB(data);
};

export default getAllData;
