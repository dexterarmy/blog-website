const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });
mongoose
  .connect(
    "mongodb+srv://mohitblog:MQ1UR04AhFfaOsdS@blog.rop8dcq.mongodb.net/blog?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connection successful"));

app.listen(8080, () => {
  console.log("server listening at port 8080");
});
