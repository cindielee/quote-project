console.log("linked")

var quotes = ["Another one - DJ Khaled", 
"Just Do It - Nike",
"Don't believe everything on the internet - unknown"]

function newQuote() {
var randNum = Math.floor(Math.random() * (quotes.length))
console.log(quotes[randNum])
document.getElementById('quote').innerHTML = quotes[randNum]
}