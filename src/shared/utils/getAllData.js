import getDataSteam from "../../steam/utils/getDataSteam.js";
import getDataEpicGames from "../../epicGames/utils/getDataEpicGames.js";
import uploadDataToDB from "../../../database/func/uploadDataToDB.js";

const getAllData = async () => {
  const steam = await getDataSteam();
  const epicGames = await getDataEpicGames();
  const data = [...epicGames, ...steam];
  uploadDataToDB(data);
};

export default getAllData;
