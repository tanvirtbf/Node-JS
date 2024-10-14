const mongoose = require("mongoose");
const shortId = require("shortid");
const { URL } = require("../models/urlModels");

async function getHomePage(req, res) {
  const allUrls = await URL.find({});
  res.render("home", {
    urls: allUrls,
  });
}

async function handleRedirectUrl(req, res) {
  const shortId = req.params.shortId;
  const redirectUrl = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );

  res.redirect(redirectUrl.redirectUrl)
}

async function handleUrlRoutes(req, res) {
  const body = req.body;
  const id = shortId();

  if (!body.url) return res.json({ message: "URL Needed!" });

  const result = await URL.create({
    shortId: id,
    redirectUrl: body.url,
    visitHistory: [],
  });
  console.log(result);
  return res.render("home", {
    url: result,
  });
}

module.exports = {
  getHomePage,
  handleUrlRoutes,
  handleRedirectUrl,
};
