import express from "express";
import { getData, sendEmail } from "./controllers/index.js";

const connectionRoute = express.Router();

connectionRoute.get("/", getData);
connectionRoute.post("/sendEmail", sendEmail);

export { connectionRoute };
