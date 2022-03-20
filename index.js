// Create an Array of at least 3 losing messages

let losingmsg = ['Sorry', 'Incorrect', 'You lose'];

// Create variables to count wins and losses

var winner = 2
console.count(winner);

var loser = [1, 3]
console.count(loser)

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

var wins = document.querySelector('wins')
var message = document.querySelector('message')
var losses = document.querySelector('losses')


// target all .box elements and attach a click event listener to each one using a loop

let box = document.querySelectorAll('button');

box.forEach(function (i) {
  i.addEventListener('click', function() {
    console.log(i);
  });
});


// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

function clicked(div) {
    if(div.id = 'box-1') { 
      console.log('1');
    } else if(div.id = 'box-2') {
      console.log('2');
    } else if(div.id = 'box-3') {
      console.log('3');
    }
  }

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

let winningbox = 2

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

const num = Math.ceil(Math.random() * 3);
console.log(num);
 const guess = clicked();
 if (guess == num)
   console.log('You win!');
 else
   console.log(losingmsg); 

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses

