const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const authRoutes = require("./routes/authRoutes");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(
  cors({
    origin: "https://blog-rho-ruby-31.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/blogs", blogRoutes);

app.listen(process.env.PORT, () => {

    console.log("Server Running");

});
