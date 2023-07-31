import "dotenv/config";
import { firebaseAdminKey } from "./firebaseAdminKey.js";
import admin from "firebase-admin";

export const firebaseConfig = {
  credential: admin.credential.cert(firebaseAdminKey),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  databaseAuthVariableOverride: {
    uid: "my-service-worker",
  },
};
