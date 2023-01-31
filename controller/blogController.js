const Blog = require("./../models/BlogModel")
exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({
            success: true,
            message: "All Blog Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
exports.addBlogs = async (req, res) => {
    try {
        console.log(req.body);
        await Blog.create(req.body)
        res.json({
            success: true,
            message: " Blog Created successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
exports.removeBlogs = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            success: true,
            message: " Blog Removed successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
exports.updateBlogs = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndUpdate(blogId, req.body)
        res.json({
            success: true,
            message: " Blog Updated successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
