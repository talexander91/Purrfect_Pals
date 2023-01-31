//fetches cat api info. NEEDS DOTENV FOR API KEY. NEEDS CAT TO BE DEPENDENT ON USER INPUT
const cat = "siamese"
const link = `https://api.api-ninjas.com/v1/cats?name=${cat}`

  fetch(link, {
    method: 'GET',
    headers: { 'X-Api-Key': `${process.env.API_KEY}`},
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    console.log(data)

  })