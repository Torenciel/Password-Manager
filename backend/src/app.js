import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import authRoutes from "../src/routes/auth.routes.js";
import passRoutes from "../src/routes/pass.routes.js";

const app = express();
app.use(express.json());

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use("/api/auth", authRoutes);
app.use("/api/passwords", passRoutes);

export default app;
