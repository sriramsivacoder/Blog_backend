const Blog = require("../models/blogScheme");

const createBlog = async (req, res) => {

    try {

        const blog = await Blog.create({

            ...req.body,

            author: req.user.id

        });

        res.status(201).json(blog);

    }

    catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getBlogs = async (req, res) => {

    try {

        const blogs = await Blog.find()

        .populate("author", "name email")

        .sort({ createdAt: -1 });

        res.json(blogs);

    }

    catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getBlogById = async (req, res) => {

    try {

        const blog = await Blog.findById(req.params.id)

        .populate("author", "name email");

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.json(blog);

    }

    catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const updateBlog = async (req, res) => {

    try {

        const updated = await Blog.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.json(updated);

    }

    catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const deleteBlog = async (req, res) => {

    try {

        await Blog.findByIdAndDelete(req.params.id);

        res.json({
            message: "Blog Deleted"
        });

    }

    catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {

    createBlog,

    getBlogs,

    getBlogById,

    updateBlog,

    deleteBlog

};