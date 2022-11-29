import DB from "./connectToDB.js";
import deleteTable from "./deleteTableContent.js";
import dropTable from "./dropTable.js";

const uploadDataToDB = (data) => {
  // console.log(data);
  // dropTable();
  // deleteTable();

  DB.run(
    `create table if not exists game(Name text NOT NULL UNIQUE,Date text,Link text,DLC integer,Image text,Platform text)`
  );

  data.forEach(({ name, date, link, dlc, image, platform }) => {
    try {
      DB.run(
        `INSERT OR IGNORE INTO game VALUES("${name}","${date}","${link}","${dlc}","${image}","${platform}")`
      );
      console.log("hello");
    } catch (error) {
      console.log(error);
    }
  });
};

export default uploadDataToDB;
