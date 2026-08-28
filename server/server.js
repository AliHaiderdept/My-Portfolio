import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import contactRouter from "./routes/contact.js";

const app = express();
const PORT = Number(process.env.PORT || 5000);
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ali_haider_portfolio";
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: CLIENT_ORIGIN.split(",").map((value) => value.trim()),
    methods: ["GET", "POST"]
  })
);
app.use(express.json({ limit: "200kb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "portfolio-api",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

app.use("/api/contact", contactRouter);

app.use((_req, res) => {
  res.status(404).json({ ok: false, message: "Route not found" });
});

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("[db] MongoDB connected");
  } catch (error) {
    console.error("[db] MongoDB connection failed:", error.message);
    console.error("[db] Server is starting anyway; contact form will return an error until MongoDB is reachable.");
  }

  app.listen(PORT, () => {
    console.log(`[api] listening on http://localhost:${PORT}`);
  });
}

start();
