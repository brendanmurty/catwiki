const CatApiService = require("../services/CatApiService.js");

/**
 * 
 * Controller: CatBreed
 * 
 * Returns a list of all cat breeds and the properties of each.
 * 
 **/
exports.get = async function (request, response) {
  const catBreeds = await CatApiService.CatApiRequest("breeds", []);

  response.end(JSON.stringify(catBreeds));
}
