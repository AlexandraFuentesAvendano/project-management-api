import express from "express";
import { apiRouter } from "./routes/api";

export const app = express();

app.use(express.json());

app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
    res.json({ message: "now get / is available" })
})