const newGameBtn = document.getElementById("new-game-btn"); 
const checkDeckBtn = document.getElementById('check-deck-btn')

let deckId = ""

/*
new game button:

get a deck from api
set game board
keep track if game started = true 
    if clicked when true, user prompt tht doing so will restart game
    suffle deck for new game 


*/

newGameBtn.addEventListener("click", newGame)

checkDeckBtn.addEventListener("click", checkDeck)



function newGame(){
    console.log("click")
    getDeck()
    //console.log(deckId)
    
}

function getDeck(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        deckId = data.deck_id
        console.log(deckId)
    })
}

function checkDeck(){
    console.log("click from check deck")
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}`)
        .then(res => res.json())
        .then(data => console.log(data))
}
