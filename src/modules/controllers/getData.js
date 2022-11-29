import { connectToDB } from "../../../database/func/index.js";

const getData = async (req, res, next) => {
  try {
    let sql = `SELECT * FROM game `;
    connectToDB.all(sql, (err, rows) => {
      if (err) console.log(err);

      return res.status(200).json(rows);
    });
  } catch (err) {
    return next(err);
  }
};

export default getData;
