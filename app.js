import cors from "cors";
import express from "express";
import { getAllDataInterval } from "./src/func/index.js";
import { connectionRoute } from "./src/modules/routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
getAllDataInterval();
app.use(express.json());
app.use(connectionRoute);
app.listen(PORT, () => console.log(`Server is working on port:${PORT}`));
