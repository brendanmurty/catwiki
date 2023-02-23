const CatApiService = require("../services/CatApiService.js");

/**
 * 
 * Controller: CatPhotosByBreed
 * 
 * Returns a fixed number of cat images based on the supplied cat breed id.
 * Note that the breed id must be a string like "beng".
 * 
 **/
exports.get = async function (request, response) {
  const catPhotosByBreed = await CatApiService.CatApiRequest("images/search", ["breed_ids=" + request.params['id'], "limit=18"]);

  response.end(JSON.stringify(catPhotosByBreed));
}
