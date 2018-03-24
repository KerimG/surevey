const express = require("express");

let app = express();

app.use(express.static("static"));

console.log("Express app listening on port 80");
app.listen(80);
