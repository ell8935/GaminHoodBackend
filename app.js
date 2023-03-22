import cors from "cors";
import express from "express";
import { connectionRoute } from "./src/modules/routes.js";
import getAllDataInterval from "./src/shared/utils/getAllDataInterval.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
getAllDataInterval();
app.use(express.json());
app.use(connectionRoute);
app.listen(PORT, () => console.log(`Server is working on port:${PORT}`));
