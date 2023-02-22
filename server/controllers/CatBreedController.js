const CatApiService = require("../services/CatApiService.js");

exports.get = async function (request, response) {
  const catBreeds = await CatApiService.CatApiRequest("breeds", []);

  response.end(JSON.stringify(catBreeds));
}
