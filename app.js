/*==Variables Created==*/ 

const keyboard = document.getElementById('qwerty');
const phraseDisplay = document.getElementById('phrase');
const title = document.querySelector('.title');
const startDiv = document.querySelector('.start');
const overlay = document.getElementById('overlay');
const btnReset = document.querySelector('.btn__reset');

//Guess Count
let guessCount = document.querySelectorAll('.tries');
let correct;
let missed = 0;

/*== Event Listener ==*/ 

overlay.addEventListener('click', (event) => {
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

const getRandomPhraseAsArray = (array) => {
    let randomPhrase = Math.floor(Math.random() * array.length);
    
    return array[randomPhrase].split('');
}

getRandomPhraseAsArray(phraseText);


/*== addPhraseToDisplay Game Display==*/ 

const addPhraseToDisplay = (array) => {
    for (let i = 0; i < array.length; i++) {
      let li = document.createElement('li');
      let ul = document.getElementsByTagName('ul')[0];
      li.textContent = array[i];

      if (li.textContent === ' ') {
        li.className = "space"; 
      } else {
        li.className = "letter";
      }

      ul.appendChild(li);
    }   
}

let phraseArray = getRandomPhraseAsArray(phraseText);
addPhraseToDisplay(phraseArray);

/*== checkLetter ==*/ 

    const checkLetter = button => {
      let liItems = document.getElementsByClassName('letter');
      let hearts = document.getElementsByClassName('hearts');
      let correctMatch = null;

      for (let i =0; i < liItems.length; i++) {
        if (liItems[i].textContent === button) {
          liItems[i].classList.add('show'); 
          correctMatch = liItems[i].textContent; //if match they store button in liItems variable
        }
      }
      return correctMatch;
    }

/*== Event Listener Keyboard ==*/ 

      keyboard.addEventListener('click', (event) => {   //Event Listener on "click" of keyboard
        const letterMatch = checkLetter(event.target.innerHTML);     
        if (event.target.tagName === 'BUTTON') {
            event.target.classList.add('chosen');
            event.target.disabled = true;
            
          if (letterMatch === null) { //checkLetter does not find letter, remove heart
              let heart = document.getElementsByTagName('img')[missed];
              heart.src = 'images/lostHeart.png';
              missed += 1;
            } 
        }  
        checkWin ();
      });
    
/*== checkWin ==*/ 

    const checkWin = () => {
      const letter = document.getElementsByClassName("letter");
      const show = document.getElementsByClassName("show");
      const title = document.querySelector(".title");
      if (letter.length === show.length) {
        overlay.classList.add('win');
        overlay.style.display = "flex";      
        title.textContent = "YOU WIN!!"; 
        startDiv.setAttribute("onClick","window.location.reload()");
        btnReset.textContent = "Restart"; 
      }
      else if (missed > 4) {
        overlay.classList.add('lose');
        overlay.style.display= "flex";
        title.textContent = "Game Over...Try Again!";
        startDiv.setAttribute("onClick","window.location.reload()");
        btnReset.textContent = "Try Again";      
      }
    };