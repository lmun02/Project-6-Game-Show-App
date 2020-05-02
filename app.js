/*==Variables Created==*/ 

const qwerty = document.getElementById('qwerty');
const phraseDisplay = document.getElementById('phrase');
const startDiv = document.querySelector('.start');
const title = document.querySelector('.title');
const overlay = document.getElementById('overlay');

//Guess Count
let guessCount = document.querySelectorAll('.tries');
let correct;
let missed = 0;

/*== Event Listener ==*/ 

overlay.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});

/*== Array of Phrases ==*/ 

const phraseText = [
    'puppy love',
    'summer is amazing',
    'ocean therapy',
    'lets go hiking',
    'aloha'
]

/*== getRandomPhraseAsArray selection ==*/ // phrase into letter of array

const getRandomPhraseAsArray = (arr) => {
    let randomPhrase = Math.floor(Math.random() * phraseText.length);
    
     return phraseText[randomPhrase].split('');
}
getRandomPhraseAsArray(phraseText);


/*== addPhraseToDisplay Game Display==*/ 

const addPhraseToDisplay = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li');
      li.textContent = arr[i];

      if (li.textContent === ' ') {
        li.className = "space"; //li.classList.add('space');

      } else {
        li.className = "letter"; //li.classList.add('leter');
      }

      phraseDisplay.appendChild(li);
    }
    
}

const phraseArray = getRandomPhraseAsArray(phraseText);
addPhraseToDisplay(phraseArray);

/*== checkLetter ==*/ 

    //const checkLetter = button => {}

/*== Event Listener Keyboard*/ 

    //qwerty.addEventListener('click', () => {});

/*== checkWin ==*/ 

    //const checkWin = () => {}

