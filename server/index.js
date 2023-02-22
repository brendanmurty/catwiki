const path = require("path"),
      express = require("express"),
      PORT = process.env.PORT || 3001,
      router = express.Router(),
      app = express(),
      dotenv = require("dotenv");

// Load the configuration values from ".env" and add them to the "process.env" object
require('dotenv').config();

// Send supported API endpoints to the relevant controller
const CatBreedController = require("./controllers/CatBreedController.js");
const CatPhotosByBreedController = require("./controllers/CatPhotosByBreedController.js");

router.get('/api/catbreed', CatBreedController.get);
router.get('/api/catphotosbybreed/:id', CatPhotosByBreedController.get);

app.use('/', router);

// Serve the built client app files
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Send all other GET requests to the client app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Start the API server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});