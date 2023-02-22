const CatApiService = require("../services/CatApiService.js");

exports.get = async function (request, response) {
  const catPhotosByBreed = await CatApiService.CatApiRequest("images/search", ["breed_ids=" + request.params['id'], "limit=18"]);

  response.end(JSON.stringify(catPhotosByBreed));
}
