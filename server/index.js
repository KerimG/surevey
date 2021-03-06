const express = require("express");
const fs = require("fs");
const https = require("https");
const path = require("path");

global.projectRoot = path.resolve(__dirname + "/..");
global.clientRoot = global.projectRoot + "/client";
global.serverRoot = global.projectRoot + "/server";

let app = express();

app.use(express.static(global.serverRoot + "/static"));
app.use(express.static(global.clientRoot + "/assets"));

app.get("/", function(req, res) {
  res.sendFile(global.clientRoot + "/index.html");
});

if (process.env.NODE_ENV === "production") {
  // create symlinks to ssl files in server/ssl folder
  let httpsOptions = {
    key: fs.readFileSync(global.serverRoot + "/ssl/privkey.pem"),
    cert: fs.readFileSync(global.serverRoot + "/ssl/cert.pem")
  };

  console.log("Express app listening on SSL enabled port 443");
  https.createServer(httpsOptions, app).listen(443);
} else {
  console.log("Express app listening on port 8080");
  app.listen(8080);
}
