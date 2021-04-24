//import { mainRouter as MR } from "mainRoutes.js";
//TESTING
let path = require("path");
let express = require("express");
let app = express();
let mainRouter = require("./mainRoutes.js");

app.use(mainRouter);
let port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server running on port", port);
console.log("Express server running on port 3000");
