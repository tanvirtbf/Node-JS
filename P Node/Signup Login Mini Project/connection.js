const mongoose = require("mongoose");

function connectionDB(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));
}

module.exports = {
    connectionDB,
}