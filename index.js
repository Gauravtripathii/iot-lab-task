import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import clientRoutes from "./routes/client.js";
import shopRoutes from "./routes/shops.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routes
app.use("/", clientRoutes);
app.use("/shops", shopRoutes);

// const CONNNECTION_URL = "mongodb+srv://gaurav:gaurav@cluster0.hysswpx.mongodb.net/?retryWrites=true&w=majority";
const CONNNECTION_URL = "mongodb://localhost:27017";
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(CONNNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server live on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
