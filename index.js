const newGameBtn = document.getElementById("new-game-btn"); 

const deckId = ""

/*
new game button:

get a deck from api
set game board
keep track if game started = true 
    if clicked when true, user prompt tht doing so will restart game
    suffle deck for new game 


*/

newGameBtn.addEventListener("click", newGame)


function newGame(){
    console.log("click")
    getDeck()
    
}

function getDeck(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}