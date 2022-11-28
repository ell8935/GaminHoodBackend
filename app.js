import express from "express";
import cors from "cors";
import { getAllData } from "./src/func/index.js";
import { connectionRoute } from "./src/modules/routes.js";

const app = express();
const PORT = 5000;
app.use(cors());
getAllData();
app.use(express.json());
app.use(connectionRoute);
app.listen(PORT, () => console.log(`Server is working on port:${PORT}`));
