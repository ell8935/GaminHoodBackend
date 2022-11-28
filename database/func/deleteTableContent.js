import DB from "./connectToDB.js";

const deleteTable = () => {
  DB.run(`DELETE FROM game;
  `);
};

export default deleteTable;
