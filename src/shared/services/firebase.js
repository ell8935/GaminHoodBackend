import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "../constants/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const realTimeDatabase = getDatabase(app);

export { auth, realTimeDatabase };
