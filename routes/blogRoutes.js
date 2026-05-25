const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

    createBlog,

    getBlogs,

    getBlogById,

    updateBlog,

    deleteBlog

} = require("../controller/blogController");

router.get("/", getBlogs);

router.get("/:id", getBlogById);

router.post("/", authMiddleware, createBlog);

router.put("/:id", authMiddleware, updateBlog);

router.delete("/:id", authMiddleware, deleteBlog);

module.exports = router;