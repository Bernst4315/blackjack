const newGameBtn = document.getElementById("new-game-btn")
const checkDeckBtn = document.getElementById('check-deck-btn')
const drawCardBtn = document.getElementById("draw-card-btn")

let deckId = ""
let handSetUp = false

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

drawCardBtn.addEventListener("click", drawCard)


function newGame(){
    console.log("click")
    getDeck()
    //console.log(deckId)
    //drawCard()
    
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

function drawCard(){
    console.log("you drew a card")
    if(!handSetUp){

        handSetUp = true
        
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
            .then(res => res.json())
            .then(data => console.log(data))

            

    } else {

        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
}

function checkDeck(){
    console.log("click from check deck")
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}`)
        .then(res => res.json())
        .then(data => console.log(data))
}
