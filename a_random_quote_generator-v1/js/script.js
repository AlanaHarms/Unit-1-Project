// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
// Starts the array and stores it in a variable called quotes
var quotes = [
  // object
  {
    // objects properties
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "The only place success comes before work is in the dictionary.",
    source: "Vince Lombardi"
  },
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now",
    source: "Chinese Proverb"
  },
  {
    quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
    source: "Christopher Columbus"
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    source: "George Addair"
  }
];



// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(array){
  // creates a random number between 0 and 5, then returns the object in the array that lines up with the number
  return array[ Math.floor(Math.random() * 5)];
}


// Create the printQuote funtion and name it printQuote
function printQuote(){
  // stores the object from the quote array in a variable called quoteObject
  var quoteObject = getRandomQuote(quotes);
  // creates a string of html code that contains the quote that was picked at random
  var stringOfQuoteProperties = '<p class="quote">' + quoteObject.quote +'</p> <p class="source">' + quoteObject.source + '</p>';
  // replaces the html in the quote-box div
  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
