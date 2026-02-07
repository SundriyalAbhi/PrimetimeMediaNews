const express = require('express')
const { AddNews, getAllNews, getNewsBySlug, updateNewsBySlug, deleteNewsBySlug, getSectionNews } = require('../Controllers/news.controller')

const NewsRouter = express.Router()

NewsRouter.post("/addnews",AddNews)
NewsRouter.get("/getallnews",getAllNews)
NewsRouter.get("/getnewsbyslug/:section/:slug", getNewsBySlug);
NewsRouter.get("/getnewsbysection/:section",getSectionNews);
NewsRouter.put("/updatenews/:section/:slug", updateNewsBySlug);
NewsRouter.delete("/deletenews/:section/:slug", deleteNewsBySlug);

module.exports = NewsRouter