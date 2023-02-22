const path = require("path"),
      express = require("express"),
      PORT = process.env.PORT || 3001,
      app = express(),
      dotenv = require("dotenv");

// Load the configuration values from ".env" and add them to
// the "process.env" object
require('dotenv').config();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from CatWiki!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});