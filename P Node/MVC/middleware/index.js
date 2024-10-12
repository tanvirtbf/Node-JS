const fs = require("fs");

function logReqRes(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `${Date.now()} - ${req.url}\n`,
      (err, data) => {}
    );
    next();
  };
}

module.exports = {
  logReqRes,
}
