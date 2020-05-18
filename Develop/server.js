const express = require("express");
// const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes")

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use("/api", apiRoutes );
app.use("/", htmlRoutes );

app.listen(PORT, () => 
    console.log("Listening on Port: " + PORT + "." )
);

