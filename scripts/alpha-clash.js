function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        gameOver();
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if(updatedLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);



function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}