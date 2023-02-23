/**
 * 
 * Service: CatApiRequest
 * 
 * Uses the Cat API configuration values from the ".env" file
 * to send an API request and return the results as a JSON object.
 * 
 * In a production environment, this would likely use a user-based authentication
 * process which would allow the system to provide user-specific customisation options 
 * or allow them to filter photo results by just the photos they've uploaded.
 * 
 * This should also handle the situation where the API returns a rate limiting
 * response or an error state.
 * 
 **/
exports.CatApiRequest = async function (endpoint, params) {
  const CatApiUrl = process.env.CATWIKI_SERVER_CATAPI_URL;
  const CatApiKey = process.env.CATWIKI_SERVER_CATAPI_KEY;

  const apiRequestUrl = CatApiUrl +
    endpoint +
    '?api_key=' + CatApiKey +
    ( params ? '&' + params.join('&') : '' );

  const apiResponse = await fetch(apiRequestUrl).then((response) => {
    if (response) {
      return response.json();
    }

    return [];
  });

  return apiResponse;
}
