//  FILMS
const filmImgs = [
  "Images/01 A New Hope.jpg",
  "Images/02 Empire Strikes Back.jpg",
  "Images/03 Return of the Jedi.jpg",
  "Images/04 Phantom Menance.jpg",
  "Images/05 Attack of the Clones.webp",
  "Images/06 Revenge of the Sith.jpg"
];

// CHARACTERS
//array of character images, grabbed from our images folder
const characterImages = [
  "Images/01 Luke.jpeg",
  "Images/02 C-3PO.webp",
  "Images/03 R2-D2.avif",
  "Images/04 Darth Vader.jpg",
  "Images/05 Leia.jpg",
  "Images/06 Owen Lars.webp",
  "Images/07 beru whitesun.webp",
  "Images/08 R5-d4.avif",
  "Images/09 Biggs Darklighter.webp",
  "Images/10 Ben Kenobi.png",
]

//HOLD current charcter and movie/film
let currentPerson = 1;
//keep track of current film
let filmIndex = 0;

// DOM Manipulation
//variable to hold our film title
const currentFilmTitle = document.getElementById('film-title');
//variable to select our img element
const filmImg = document.getElementById('movie-img');
//variable to select our film pargraph element
const filmSection = document.getElementById('film-info');
const filmDescription = filmSection.querySelector('pre');
//variables to hold our next and previous film buttons
const previousFilm = document.getElementById('previous-film');
const nextFilm = document.getElementById('next-film')
//variable to hold character name
const currentCharacterOne = document.getElementById('character-one-name');
// variable to hold images of characters
const characterImgOne = document.getElementById('char-one-img');
// variable to select our paragraph chararcter description
const charDescriptionOne = document.getElementById('char-one-description');
//variable to select our previous and next button elements
const previousCharacter = document.getElementById('previous-button');
const nextCharacter = document.getElementById('next-button');

//USING ASYNC + AWAIT
// FETCH
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

    //start at first film
    const film = data.result;

    //set our current img
    filmImg.src = filmImgs[0];
  
    // set our film title and description
    currentFilmTitle.textContent = film[filmIndex].properties.title;
    filmDescription.textContent = film[filmIndex].properties.opening_crawl;

    //event listener to click a button and change next film
    nextFilm.addEventListener('click', event => {
      //if film length is greater than amount we have reset the index value to beginning.
      if (filmIndex >= 5) {
        filmIndex = -1;
      } 
    
      //change fim title, img and description
      filmImg.src = filmImgs[filmIndex+1];
      currentFilmTitle.textContent = film[filmIndex+1].properties.title;
      filmDescription.textContent = film[filmIndex+1].properties.opening_crawl;

      //increment index by 1 to update our film index
      filmIndex += 1;

      // console.log(filmIndex);
    });

    previousFilm.addEventListener('click', event => {
      if (filmIndex <= 0) {
        filmIndex = 6;
      } 
      //change fim title, img and description
      filmImg.src = filmImgs[filmIndex-1];
      currentFilmTitle.textContent = film[filmIndex-1].properties.title;
      filmDescription.textContent = film[filmIndex-1].properties.opening_crawl;
        
      //increment index by 1 to update our film index
      filmIndex = (filmIndex - 1);
  
      // console.log(filmIndex);
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

const fetchDataThree = async(currentPerson) => {
  const currentUrl = `https://www.swapi.tech/api/people/${currentPerson}`;

  charDescriptionOne.textContent = 'Loading Description....PLEASE WAIT BEFORE YOU PRESS NEXT OR PREVIOUS';
  
  //try catch error to handle promise rejections
  try {
    const responseDesc = await fetch(currentUrl);

    const desc = await responseDesc.json();

    //if reponse throws an error
    if (!responseDesc.ok) {
      throw new Error('Request failed: ', response.status);
    }
    console.log(desc.result.properties);

    characterImgOne.src = characterImages[currentPerson - 1];

    //variable to hold our response json 
    const characterOneInfo = desc.result.properties;

    //display our character name in our h3 title
    currentCharacterOne.innerText = characterOneInfo.name;

    //diplay our character description content
    charDescriptionOne.textContent =
    `Height: ${characterOneInfo.height}
    | Mass: ${characterOneInfo.mass}
    | Gender: ${characterOneInfo.gender}
    | Birth Year: ${characterOneInfo.birth_year}`;

    //to reponse to errors in the try statement
  } catch(error) {
    console.error('An eror occured: ', error);
  }
}

// CLICK EVENT LISTENERS
nextCharacter.addEventListener('click', () => {
  //if character length is greater than amount we have reset the index value to beginning.
  if (currentPerson >= 10) {
    currentPerson = 1;
  } else {
    currentPerson ++;
  }

  //change characters description
  fetchDataThree(currentPerson);

  // console.log(currentPerson);
});

previousCharacter.addEventListener('click', () => {
  if (currentPerson <= 1) {
    currentPerson = 10;
  } else {
    currentPerson --;
  }

  //change characters description
  fetchDataThree(currentPerson);
  // console.log(currentPerson);

});

fetchDataThree(currentPerson);

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