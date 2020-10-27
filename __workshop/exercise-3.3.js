// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat},${lng}`,
  };

  // return ...
  return new Promise(function(resolve, reject){
    opencage
      .geocode(requestObj)
      .then((data) =>{
        let coordinates = data['results'][0]['formatted']
        resolve(coordinates)
      })
      .catch((error) =>{
        reject(error.message)
      });
  })
}

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log(response)
);

