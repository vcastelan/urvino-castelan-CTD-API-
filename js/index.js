//USING ASYNC + AWAIT
const fetchData = async() => {
  //try catch error to handle promise rejections
  try {
    //create a variable to await for an asynchronous response to finish.
    const response = await fetch('https://www.swapi.tech/api/films/');
    //variable to hold the response results and converted to json format
    const data = await response.json();

    //if reponse throws an error
    if (!response.ok) {
      throw new Error('Request failed: ', response.status);
    }
    //what we will do with our data
    console.log(data.result);
    //forEach to print to the console what we want. In this case title information for our films
    data.result.forEach((result) => {
      console.log(result.properties.title);
    });
  //to reponse to errors in the try statement
  } catch(error) {
    console.error('An eror occured: ', error);
  }
} 
fetchData();

//USING PROMISE

// fetch('https://www.swapi.tech/api/films/') 
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Request failed: ', response.status);
//     }
//     //parse the return response via JSON
//     return response.json();
//   })
//   //what we will do with our data
//   .then(data => {
//     const information = data;
//     console.log(information.result);
//     information.result.forEach((result) => {
//       console.log(result.properties.title);
//     })
//   })
//   .catch(error => {
//     console.error('An eror occured: ', error);
// });