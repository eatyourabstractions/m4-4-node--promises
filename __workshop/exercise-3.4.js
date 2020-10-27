// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const {getIssPosition} = require('./exercise-3.1')
const {getPositionFromAddress} = require('./exercise-3.2')

// euclidean distance func
const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};
const getDistanceFromIss = (address) => {
  // write a new Promise here...
  return new Promise(function(resolve, reject) {
      getIssPosition().then(res => {
        getPositionFromAddress(address)
          .then((response) => {
            resolve(`distance from ${address} to ISS is: ${getDistance(res, response)}` )
          }).catch(err => reject(err))
      }).catch(err => reject(err))
    })
};

getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
  .then(res => console.log(res))
 