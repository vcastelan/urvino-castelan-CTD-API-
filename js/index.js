const filmImgs = [
  "Images/01 A New Hope.jpg",
  "Images/02 Empire Strikes Back.jpg",
  "Images/03 Return of the Jedi.jpg",
  "Images/04 Phantom Menance.jpg",
  "Images/05 Attack of the Clones.webp",
  "Images/06 Revenge of the Sith.jpg"
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

    //variable to hold our film title
    const currentFilmTitle = document.getElementById('film-title');
    
    //variable to select our img element
    const filmImg = document.getElementById('movie-img');
    //set our current img
    filmImg.src = filmImgs[0];
  
    //variable to select our film pargraph element
    const filmSection = document.getElementById('film-info');
    const filmDescription = filmSection.querySelector('pre');

    // set our film title and description
    currentFilmTitle.textContent = film[filmIndex].properties.title;
    filmDescription.textContent = film[filmIndex].properties.opening_crawl;

    //variables to hold our next and previous film buttons
    const previousFilm = document.getElementById('previous-film');
    const nextFilm = document.getElementById('next-film')

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
  
      console.log(filmIndex);
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

const fetchDataTwo = async() => {
  //try catch error to handle promise rejections
  try {
    //create a variable to await for an asynchronous response to finish.
    const response = await fetch('https://www.swapi.tech/api/people/');

    const responseDesc = await fetch('https://www.swapi.tech/api/people/1');
    //variable to hold the response results and converted to json format
    const people = await response.json();
    const desc = await responseDesc.json();

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

    //checking to see if i can get description of character
    // console.log(people.results[0].url);
    // console.log(desc.result.description);

    //start at first character
    let index = 0;

    //variables to hold character names
    const currentCharacterOne = document.getElementById('character-one-name');
    const currentCharacterTwo = document.getElementById('character-two-name')

    //variable to hold previous and next buttons to change characters
    const previousCharacter = document.getElementById('previous-button');
    const nextCharacter = document.getElementById('next-button')

    // variables to hold images of characters
    const characterImgOne = document.getElementById('char-one-img');
    const characterImgTwo = document.getElementById('char-two-img');

    //variable to hold description of characters
    const charDescriptionOne = document.getElementById('char-one-description');
    const charDescriptionTwo = document.getElementById('char-two-description');

    // current characters names, imgs and descriptions
    currentCharacterOne.innerText = characters[index].name;
    currentCharacterTwo.innerText = characters[index+1].name;
    characterImgOne.src = characterImages[0];
    characterImgTwo.src = characterImages[1];
    charDescriptionOne.textContent = characters[index].description;
    charDescriptionTwo.textContent = characters[index+1].description;

    // Function to change the character on click
    //event listener to click a button and change character
    nextCharacter.addEventListener('click', event => {
      //if character length is greater than amount we have reset the index value to beginning.
      if (index >= 8) {
        index = -2;
      } 
    
      //change characters title
      currentCharacterOne.innerText = characters[index+2].name;
      currentCharacterTwo.innerText = characters[index+3].name;

      //change characters image
      characterImgOne.src = characterImages[index+2];
      characterImgTwo.src = characterImages[index+3];

      //change characters description

      //increment index by 1 to update our character index
      index = (index + 1);
      index = (index + 1);

      // console.log(index);
    });

    previousCharacter.addEventListener('click', event => {
      if (index <= 0) {
        index = 10;
      } 
      //change characters title
      currentCharacterOne.innerText = characters[index-2].name;
      currentCharacterTwo.innerText = characters[index-1].name;
    
      //change characters image
      characterImgOne.src = characterImages[index-2];
      characterImgTwo.src = characterImages[index-1];

       //change characters description
    
      //increment index by 1 to update our character index
      index = (index - 1);
      index = (index - 1);
    
      // console.log(index);

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