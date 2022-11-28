import sqlite3 from "sqlite3";
import { dbPath } from "../../appConfig.js";

const connectToDB = new sqlite3.Database(dbPath);

export default connectToDB;
