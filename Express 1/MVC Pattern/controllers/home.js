const { register } = require("module");
const Home = require("../models/home");
const path = require("path");

exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    })
  );
};
