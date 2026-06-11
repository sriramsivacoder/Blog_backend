const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const authRoutes = require("./routes/authRoutes");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(cors({});
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/blogs", blogRoutes);

app.listen(process.env.PORT, () => {

    console.log("Server Running");

});
