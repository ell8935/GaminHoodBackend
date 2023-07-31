import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../constants/firebaseConfig.js";
import { getDatabase } from "firebase/database";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const realTimeDatabase = getDatabase(app);

export {auth, realTimeDatabase };