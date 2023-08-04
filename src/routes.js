import express from "express";
import { getData, sendEmail } from "./controllers.js";

const connectionRoute = express.Router();

connectionRoute.get("/", getData);
connectionRoute.post("/sendEmail", sendEmail);

export default connectionRoute;
