const { getAllBlogs, addBlogs, removeBlogs, updateBlogs } = require("../controller/blogController")

const router = require("express").Router()

router
    .get("/", getAllBlogs)
    .post("/add", addBlogs)
    .delete("/:blogId", removeBlogs)
    .put("/:blogId", updateBlogs)

module.exports = router