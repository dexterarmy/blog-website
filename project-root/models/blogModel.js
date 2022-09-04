const mongoose = require("mongoose");

const blogSchema = {
  title: String,
  date: { type: Date, default: Date.now() },
  summary: String,
  content: String,
  image: String,
};

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
