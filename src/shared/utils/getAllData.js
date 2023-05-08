import getDataSteam from "../../steam/utils/getDataSteam.js";
import uploadDataToDB from "../../../database/func/uploadDataToDB.js";
import getDataEpicGames from "../../epicGames/utils/getDataEpicGames.js";

const getAllData = async () => {
  const steam = await getDataSteam();
  const epicGames = await getDataEpicGames();
  const data = [...epicGames, ...steam];
  return data;
  console.log(data);
  uploadDataToDB(data);
};

export default getAllData;
