import admin from "firebase-admin";
import { firebaseConfig } from "../constants/firebaseConfig.js";

admin.initializeApp(firebaseConfig);

const db = admin.database();
const ref = db.ref();

export { db, ref };
