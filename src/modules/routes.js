import express from "express";
import getData from "./controllers/getData.js";

const connectionRoute = express.Router();

connectionRoute.get("/getData", getData);

export { connectionRoute };
