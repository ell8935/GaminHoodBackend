import { connectToDB } from "../../../database/func/index.js";
import getAllData from "../../shared/utils/getAllData.js";

const getData = async (_req, res, next) => {
  try {
    let sql = `SELECT * FROM game `;
    connectToDB.all(sql, (err, rows) => {
      return res.status(200).json(rows);
    });
  } catch (err) {
    return next(err);
  }
};

export default getData;
