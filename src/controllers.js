import { getDataFromDB } from "./shared/services/realTimeDatabase.js";
import sendEmailHandler from "./shared/services/sendEmailHandler.js";

export const getData = async (_req, res, next) => {
  try {
    const data = await getDataFromDB();
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

export const sendEmail = async (req, res, next) => {
  try {
    const data = req.body;
    sendEmailHandler(data.email, data.body);

    return res.status(200).json("Its sent:" + { data });
  } catch (err) {
    return next(err);
  }
};
