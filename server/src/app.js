// server/src/app.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import planRoutes from "./routes/plan.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// quick health route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Routes
app.use("/api/auth", authRoutes);


// Base route
app.get("/", (req, res) => {
  res.send("AI Study Planner Backend Running");
});


app.use("/api/plans", planRoutes);

export default app;
