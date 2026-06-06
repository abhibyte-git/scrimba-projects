let homescorebtn1 = document.getElementById("home-score-btn-1")
let homescoreEl = document.getElementById("home-score")
let homescore = 0

function increaseHomeScoreOne() {
    homescore += 1 
    homescoreEl.innerText = homescore 
}

function increaseHomeScoreTwo() {
    homescore += 2 
    homescoreEl.innerText = homescore 
}

function increaseHomeScoreThree() {
    homescore += 3 
    homescoreEl.innerText = homescore 
}

let guestscorebtn1 = document.getElementById("guest-score-btn-1")
let guestscoreEl = document.getElementById("guest-score")
let guestscore = 0

function increaseGuestScoreOne() {
    guestscore += 1 
    guestscoreEl.innerText = guestscore 
}

function increaseGuestScoreTwo() {
    guestscore += 2 
    guestscoreEl.innerText = guestscore 
}

function increaseGuestScoreThree() {
    guestscore += 3 
    guestscoreEl.innerText = guestscore 
}