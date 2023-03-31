import DB from "./connectToDB.js";
import dropTable from "./dropTable.js";
import deleteTable from "./deleteTableContent.js";

const uploadDataToDB = (data) => {
  dropTable();
  // deleteTable();

  DB.run(
    `create table if not exists game(Name text NOT NULL UNIQUE,Date text,OriginalPrice text,Link text,DLC integer,Image text,Platform text)`
  );

  data.forEach(({ name, date, price, link, dlc, image, platform }) => {
    try {
      DB.run(
        `INSERT OR IGNORE INTO game VALUES("${name}","${date}","${price}","${link}","${dlc}","${image}","${platform}")`
      );
    } catch (error) {
      console.log(error);
    }
  });
};

export default uploadDataToDB;
