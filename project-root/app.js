const express = require("express");
const Blog = require("./models/blogModel");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("index");
});

// fetch blogs
app.get("/blog", async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const limit = 3;
  const skip = (page - 1) * limit;
  const blogs = await Blog.find().skip(skip).limit(limit);
  res.render("blog", { blogs, page: page, limit: limit });
});

// fetch blog article
app.get("/:name", async (req, res, next) => {
  try {
    const blogList = await Blog.find();
    const blog = await Blog.findOne({ title: req.params.name });
    res.render("blog-article", { blog, blogList });
  } catch (err) {
    console.log(err.name, err.message);
  }
});

// create blogs
app.post("/post", async (req, res, next) => {
  try {
    await Blog.create(req.body);
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(404).json({ status: "error" });
  }
});

// update blogs
app.patch("/blog/:id", async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: "success", data: blog });
});

module.exports = app;
