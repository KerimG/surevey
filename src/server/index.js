const express = require("express");

let app = express();

app.use(express.static(__dirname + "/static"));

if (process.env.NODE_ENV === "production") {
  let httpsOptions = {
    key: fs.readFileSync(__dirname + "/ssl/privatekey.pem"),
    cert: fs.readFileSync(__dirname + "/ssl/certificate.pem")
  };

  https.createServer(httpsOptions, app).listen(443);
} else {
  console.log("Express app listening on port 8080");
  app.listen(8080);
}
