fetch('https://www.swapi.tech/api/films/1') 
.then(response => {
  if (!response.ok) {
    throw new Error('Request failed: ', response.status);
  }
  //parse the return response via JSON
  return response.json();
})
//what we will do with our data
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('An eror occured: ', error);
});