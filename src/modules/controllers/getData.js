import { getDataFromDB } from "../../shared/services/realTimeDataBase/RTDBServices.js";

const getData = async (_req, res, next) => {
  try {
    const data = await getDataFromDB();
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

export default getData;
