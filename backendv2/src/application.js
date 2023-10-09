const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const photos = require("./routes/photos");
const topics = require("./routes/topics");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(
  ENV,
) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use("/api", photos());
  app.use("/api", topics());

  app.close = function () {
    console.log(`Shutting down server in ${ENV} environmen`);
  };

  return app;
};
