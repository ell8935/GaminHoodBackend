import express from "express";
import cors from "cors";
import { getAllDataInterval } from "./src/func/index.js";
import { connectionRoute } from "./src/modules/routes.js";

const app = express();
const PORT = 5000;

app.use(cors());
getAllDataInterval();
app.use(express.json()); //Json Parser
app.use(connectionRoute);
app.listen(5000, () => console.log(`Server is working on port:5000`));
