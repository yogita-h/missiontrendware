const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend is running"
    });
});

connectDB();

const router = require("./routes/userrouter");

app.use("/api", router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

module.exports = app;