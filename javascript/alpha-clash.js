// function play(){
//     // Hide the Home screen and show the play ground
//     const homeSection=document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');


//     // Showing the playground
//     const playGround=document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

// }
function handleKeyboardButtonPress(){
    const playerPressed= event.key;
    // console.log('Player pressed',playerPressed);

    // Expected to pressed
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);

    // Check matched or not
    if(playerPressed===expectedAlphabet){
        console.log('You got a point!');
        
        // Update Score
        const currentScoreElement=document.getElementById('current-score')
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        console.log(currentScore);

        // New Score
        const newScore=currentScore+1;

        // Show the score
        currentScoreElement.innerText=newScore;


        // Start a round
        removeHighlightColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed.Lost a life')

        // Step-1:Get the current life number
        const CurrentLifeElement=document.getElementById('current-life');
        const currentLifeText=CurrentLifeElement.innerText;
        const currentLife=parseInt(currentLifeText);
        // Step-2:Reduce the life count
        const newLife=currentLife-1;

        // Step-3:Display the updated life count
        CurrentLifeElement.innerText=newLife;

        if(newLife===0){
            gameOver()
        }

    }
}

document.addEventListener('keyup',handleKeyboardButtonPress)


function continueGame(){
    // Step-1: generate a random alphabet
    const alphabet=getRandomAlphabet();
    console.log('Your random alphabet',alphabet)

    // Set randomly generated Alphabet and Show
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;

    // Set background Color
    addHighlightColorById(alphabet)


}


function play(){

    // Hide Everything show only playground

    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');


    // Reset score and life
    

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}

