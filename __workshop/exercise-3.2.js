// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();
const formatCoords = (str) =>{
  return str.split(" ")[2].split("'")[0]
}
const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };

  // return something...
  
      return new Promise(function(resolve, reject){
        opencage
          .geocode(requestObj)
          .then((data) =>{
            let temp = JSON.parse( JSON.stringify(data['results'][0]['annotations']['DMS'] ))
            let coordinates = { lat: formatCoords(temp.lat), lng: formatCoords(temp.lng) } 
            resolve(coordinates)
          })
          .catch((error) =>{
            reject(error.message)
          });
      })
     
    
};

module.exports = { getPositionFromAddress };
/**  concordia U
getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response))


// place versailles
getPositionFromAddress(
  `7275 Sherbrooke St E, Montréal, QC H1N 1E9`
).then((response) => console.log(response))

// cn tower
getPositionFromAddress(
  `290 Bremner Blvd, Toronto, ON M5V 3L9`
).then((response) => console.log(response))
**/

