const express = require("express");

const app = express();

//static file access
app.use(express.static("publice"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

//templating engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//Routes
const newsRouter = require("./src/routes/news");
app.use("/", newsRouter);

// app.get("./src/routes/news", (req, res) => {
//   res.send("Hello RK Singh");
// });

//port Listen on 3000
const port = 3000;
app.listen(port, () => console.log("Listening on port 3000"));
