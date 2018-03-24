const https = require("https");
const express = require("express");
const sqlite = require("sqlite3");

let app = express();

app.use(express.static("static"));

app.listen(8080);
