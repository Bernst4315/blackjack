const newGameBtn = document.getElementById("new-game-btn")
const checkDeckBtn = document.getElementById('check-deck-btn')
const drawCardBtn = document.getElementById("draw-card-btn")
const standBtn = document.getElementById("stand-btn")
const handDiv = document.getElementById("hand")

let deckId = ""
let handSetUp = false
let hand = []

/*
new game button:

get a deck from api
set game board
keep track if game started = true 
    if clicked when true, user prompt tht doing so will restart game
    suffle deck for new game 
to resuse deck, new game could shuffle old deck.
need to make getDeck not work if win/lose conditions are met 


*/

newGameBtn.addEventListener("click", newGame)

checkDeckBtn.addEventListener("click", checkDeck)

drawCardBtn.addEventListener("click", drawCard)

standBtn.addEventListener("click", stand)


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
            .then(data => {
                console.log(data.cards)
                hand = data.cards
                console.log(hand)
                for (let card of hand){
                    handDiv.innerHTML += `<img src="${card.image}">`
                }
            })
            
            
            
        } else {
            
            fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data.cards)
                hand.push(data.cards[0])
                handDiv.innerHTML += `<img src="${data.cards[0].image}">`
                console.log(hand)
            })

        }
        
    }

function stand(){
    console.log("stand")
    //needs to check score
}

function checkDeck(){
    console.log("click from check deck")
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}`)
        .then(res => res.json())
        .then(data => console.log(data))
}
