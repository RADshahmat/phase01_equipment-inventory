import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";
import { errorMiddleware } from "./middleware/errorMiddleware";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/api", router);

app.get("/health", (_req: express.Request, res: express.Response) => {
  res.send("Equipment Inventory API Running");
});

app.use(errorMiddleware);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});