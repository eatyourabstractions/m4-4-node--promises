// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const makeAllCaps = (array) => {
  // write some code
  myPromise = new Promise((resolve, reject) =>{
    result = []
    err = false
    for(let idx = 0; idx < array.length; idx++){
      if(typeof array[idx] === 'string' && array[idx].length > 0){
        result.push(capitalizeFirstLetter(array[idx]))
      } else{
        err = true
        break;
      }
    }
    if(!err){
      resolve(result)
    } else{ reject("Error: not a string")}
  })
  return myPromise
};

const sortWords = (array) => {
  // write some code
  myPromise = new Promise((resolve, reject) =>{
    result = []
    err = false
    for(let idx = 0; idx < array.length; idx++){
      if(typeof array[idx] === 'string' && array[idx].length > 0){
        result.push((array[idx]))
      } else{
        err = true
        break;
      }
    }
    if(!err){
      resolve(result.sort(function (a, b) {
        return a.localeCompare(b); //using String.prototype.localCompare()
      }))
    } else{ reject("Error: not a string")}
  })
  return myPromise
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
