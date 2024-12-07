const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + "/public/"));

// Server Initialization
app.listen(port, () => {
	console.log("Server running on port: " + port);
});