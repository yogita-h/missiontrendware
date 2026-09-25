const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const app = express();

const allowedOrigins = [
    process.env.FRONTEND_URL || "http://localhost:5173",
    "https://missiontrendware.vercel.app",
]

app.use(cors({ origin: allowedOrigins }));
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

if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;