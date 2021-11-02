const express = require("express");
const newsRouter = express.Router();
newsRouter.get("", (req, res) => {
  res.render("news");
});
module.exports = newsRouter;
