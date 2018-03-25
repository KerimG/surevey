const express = require("express");
const fs = require("fs");
const https = require("https");

let app = express();

app.use(express.static(__dirname + "/static"));

if (process.env.NODE_ENV === "production") {
  // create symlinks to ssl files in server/ssl folder
  let httpsOptions = {
    key: fs.readFileSync(__dirname + "/ssl/privkey.pem"),
    cert: fs.readFileSync(__dirname + "/ssl/cert.pem")
  };

  console.log("Express app listening on SSL enabled port 443");
  https.createServer(httpsOptions, app).listen(443);
} else {
  console.log("Express app listening on port 8080");
  app.listen(8080);
}
