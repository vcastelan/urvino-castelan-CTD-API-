const imgLinks = [
  "images/01 A New Hope.jpg",
  "images/02 Empire Strikes Back.jpg",
  "images/03 Return of the Jedi.jpg",
  "images/04 Phantom Menance.jpg",
  "images/05 Attack of the Clones.webp",
  "images/06 Revenge of the Sith.jpg"
];


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

    //variable to select our img element
    const currentImg = document.getElementById('movie');

    //variable to select our film pargraph element
    const filmSection = document.getElementById('films');
    const filmDescription = filmSection.querySelector('p');

    currentFilm.textContent = film[filmIndex].properties.title;
    currentImg.src = "images/01 A New Hope.jpg";
    filmDescription.textContent = film[filmIndex].properties.opening_crawl;

    //event listener to click a button and change character
    filmChange.addEventListener('click', event => {
      console.log(filmIndex);
      //Change title of film
      currentFilm.innerText = film[filmIndex+1].properties.title;
      
      //change image of current film title
      currentImg.src = imgLinks[filmIndex+1];

      //change current description of our current film
      filmDescription.textContent = film[filmIndex+1].properties.opening_crawl;

      //increment by 1 or next film
      filmIndex = (filmIndex + 1);


      //if film index length is higher than current film list reset index value to beginning.
      if (filmIndex >= 5) {
        filmIndex = -1;
      } 
    });

    //forEach to print to the console what we want. In this case title information for our films
    data.result.forEach((result) => {
      console.log(result.properties.title);
      console.log(result.properties.opening_crawl);
    });


  //to reponse to errors in the try statement
  } catch(error) {
    console.error('An eror occured: ', error);
  }
} 
fetchData();


const characterImages = [
  "images/01 Luke.jpeg",
  "images/02 C-3PO.webp",
  "images/03 R2-D2.avif",
  "images/04 Darth Vader.jpg",
  "images/05 Leia.jpg",
  "images/06 Owen Lars.webp",
  "images/07 beru whitesun.webp",
  "images/08 R5-d4.avif",
  "images/09 Biggs Darklighter.webp",
  "images/10 Ben Kenobi.png",
]

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
    const characterImgOne = document.getElementById('char-one');
    const characterImgTwo = document.getElementById('char-two');

    currentCharacterOne.innerText = characters[index].name;
    currentCharacterTwo.innerText = characters[index+1].name;
    characterImgOne.src = characterImages[0];
    characterImgTwo.src = characterImages[1];

    // Function to change the character on click
    //event listener to click a button and change character
    characterChange.addEventListener('click', event => {
      console.log(index);
      //change character title
      currentCharacterOne.innerText = characters[index+2].name;
      currentCharacterTwo.innerText = characters[index+3].name;

      //change character image
      characterImgOne.src = characterImages[index+2];
      characterImgTwo.src = characterImages[index+3];

      //increment index by 1 to update our character index
      index = (index + 1);
      index = (index + 1);

      //if character length is greater than amount we have reset the index value to beginning.
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