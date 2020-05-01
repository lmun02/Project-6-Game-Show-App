/*--- Created Varibales---*/
const qwerty = document.getElementById('qwerty');
const displayPhrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn_reset'); 
const overlay = document.getElementById('overlay');

    //Array of Phrases
    let phrases =[
        'My dog loves to run',
        'We love to go to the beach',
        'Summer is my favorite season',
        'Hawaii is my home',
        'We love to travel'
    ]

    //GuessCount
    let guessTries = document.querySelectorAll('.tries');
    let correctLetter;
    let missed = 0;

/*--- Event Handler for Star Overlay---*/

btnReset.addEventListener('click', () => {
    overlay.style.display = 'none';
})

/*--- getRandomPhraseAsArray Function ---*/ 

function getRandomPhraseAsArray(arr) {

}

/*--- Add phrase to Display Function ---*/ 

/*--- checkLetter Function ---*/

/*--- Event Listener to Keyboard ---*/

/*--- checkWin Function ---*/