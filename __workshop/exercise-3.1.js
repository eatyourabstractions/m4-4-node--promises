// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');
// Returns the current position of the ISS
const getIssPosition = () => {
  return request(`http://api.open-notify.org/iss-now.json`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      const {longitude, latitude} = parsedResponse.iss_position
      return {lat: latitude, lng: longitude} // 2
    })
    .catch((err) => console.log('Error: ', err));
};

//getIssPosition().then(res => console.log(res));

module.exports = { getIssPosition };
