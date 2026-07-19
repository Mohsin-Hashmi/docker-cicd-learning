

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import healthRouter from "./routes/health.js";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(express.json());
app.use('/api', healthRouter);


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
