const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

// fake database
let registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    registeredHomes.push(this);
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
      console.log("File Writting Concluded", error);
    });
  }

  static fetchAll() {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      console.log('File read: ', err, JSON.parse(data));
      if(!err){
        registeredHomes =  JSON.parse(data)
      }
      return registeredHomes;
    })
  }
};
