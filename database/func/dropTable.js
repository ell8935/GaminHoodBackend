import DB from "./connectToDB.js";

const dropTable = () => {
  DB.run(`DROP TABLE game`);
};

export default dropTable;
