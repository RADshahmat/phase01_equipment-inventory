import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

app.get("/health", (_req: express.Request, res: express.Response) => {
  res.send("Equipment Inventory API Running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});