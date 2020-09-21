const user: any = {
  "author": "Fabio Biondi",
  "address": {
    "street": "Via Javascript 123",
    "suite": "JS",
    "city": "Trieste",
    "zipcode": "12345",
    "geo": {
      "lat": "43.10",
      "lng": "13.20",
      // "zoom": "10" (if missing set default to 5)
    }
  }
}

// EXERCISE. Get following fields by using destructuring:
// author - city (lat, lng, zoom)

// And print following output by using template literals `...`
// Fabio Biondi - Trieste (43.10, 13.20, 5)
const {address:{city:c},address:{geo:{lat:lt, lng}}} = user;
export const result = `${user.author} - ${c} ${lt} ${lng}` ;

console.log(result);
document.querySelector('#output').innerHTML = result;