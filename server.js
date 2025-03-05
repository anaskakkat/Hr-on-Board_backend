import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import jobRoutes from "./routes/jobs.js";
import applicationRoutes from "./routes/applications.js";
import cors from "cors";
import morgan from 'morgan';

config();
connectDB();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(morgan('tiny'));

// Routes
app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port http://Localhost:${PORT}`)
);
