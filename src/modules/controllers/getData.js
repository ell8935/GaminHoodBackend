import { connectToDB } from "../../../database/func/index.js";
import getAllData from "../../shared/utils/getAllData.js";

const getData = async (_req, res, next) => {
  try {
    // let sql = `SELECT * FROM game `;
    // connectToDB.all(sql, (err, rows) => {
    //   if (err) console.log(err);
    //   console.log(rows);

    //   return res.status(200).json(rows);
    // });

    const data = await getAllData();

    return res.status(200).json(data); // Fix till migrating to a hosted Database
  } catch (err) {
    return next(err);
  }
};

export default getData;
