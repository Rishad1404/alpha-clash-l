// function play(){
//     // Hide the Home screen and show the play ground
//     const homeSection=document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');


//     // Showing the playground
//     const playGround=document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

// }

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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

