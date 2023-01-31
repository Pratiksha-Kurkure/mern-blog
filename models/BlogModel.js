const mongoose = require("mongoose")

const blogSchema =mongoose.Schema({
    title:{
        type : String,
        required:[true, "Please Provide Title"]
    },
    desc:{
        type : String,
        required:[true, "Please Provide Description"]
    },
    image:{
        type : String,
        required:[true, "Please Provide Image URL"]
    },
    publish:{
        type : Boolean,
        default : false
    },
})
module.exports = mongoose.model("blog", blogSchema)       //this line creates table in database