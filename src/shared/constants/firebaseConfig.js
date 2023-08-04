import "dotenv/config";
import admin from "firebase-admin";
import { firebaseAdminKey } from "./firebaseAdminKey.js";

export const firebaseConfig = {
  credential: admin.credential.cert(firebaseAdminKey),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  databaseAuthVariableOverride: {
    uid: process.env.DATABASE_AUTH_VARIABLE_OVERRIDE_UID,
  },
};
