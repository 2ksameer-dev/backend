
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/conndb");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Backend done!");
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`
    });
});

// Start server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to database:", error.message);
        process.exit(1);
    }
};

startServer();

