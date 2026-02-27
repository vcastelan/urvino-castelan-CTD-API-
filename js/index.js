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

    // FILM CHANGES
  
    //start at first film
    const film = data.result;
    //keep track of current film
    let filmIndex = 0;

    const currentFilm = document.getElementById('film-selection');
    const filmChange = document.getElementById('films-link');

    currentFilm.textContent = film[filmIndex].properties.title;

    //event listener to click a button and change character
    filmChange.addEventListener('click', event => {
      console.log(filmIndex);
      // index = (index + 1); // Cycle through array
      currentFilm.innerText = film[filmIndex+1].properties.title;
      filmIndex = (filmIndex + 1);

      //if character length is reset index value to beginning.
      if (filmIndex >= 5) {
        filmIndex = -1;
      } 
    });

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


const fetchDataTwo = async() => {
  //try catch error to handle promise rejections
  try {
    //create a variable to await for an asynchronous response to finish.
    const response = await fetch('https://www.swapi.tech/api/people/');
    //variable to hold the response results and converted to json format
    const people = await response.json();

    //if reponse throws an error
    if (!response.ok) {
      throw new Error('Request failed: ', response.status);
    }
    //what we will do with our data
    console.log(people.results);

    //forEach to print to the console what we want. In this case title information for our films
    // people.results.forEach((person) => {
    //   console.log(person.name);
    // });
    // console.log(people.results[0].name);
    //or 

    // CHARACTER CHANGES
    //variable to hold current character
    const characters = people.results;

    //start at first character
    let index = 0;

    const currentCharacterOne = document.getElementById('character-one');
    const currentCharacterTwo = document.getElementById('character-two')
    const characterChange = document.getElementById('character-link');

    currentCharacterOne.innerText = characters[index].name;
    currentCharacterTwo.innerText = characters[index+1].name;

    // Function to change the character on click
    //event listener to click a button and change character
    characterChange.addEventListener('click', event => {
      console.log(index);
      // index = (index + 1); // Cycle through array
      currentCharacterOne.innerText = characters[index+2].name;
      currentCharacterTwo.innerText = characters[index+3].name;
      index = (index + 1);
      index = (index + 1);

      //if character length is reset index value to beginning.
      if (index >= 8) {
        index = -2;
      } 
    });

    // //for loop to check if character length is greater than current length we are at
    for (let i = 0; i < people.results.length; i++) {
      console.log(people.results[i].name);
    }

  //to reponse to errors in the try statement
  } catch(error) {
    console.error('An eror occured: ', error);
  }
} 
fetchDataTwo();

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