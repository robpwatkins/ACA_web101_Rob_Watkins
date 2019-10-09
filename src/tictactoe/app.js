
var winners = new Array()
var player1Selections = new Array();
var player2Selections = new Array();
var currentPlayer = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points
var size = 3;



















// find location of click and add x or o
// determine player1 or player2
// keep score
// find a winner via 3 in a row

function addGamePiece(selectedElement) {
  // create new element
  let newElement = document.createElement('h1')
  // add text to element
  newElement.innerHTML = 'x'
  // add element with text to selectedElement on page
  selectedElement.appendChild(newElement)
  selectedElement.removeAttribute("onclick")
  selectedElement.style.backgroundColor = "pink"
  console.log('show clicked div', selectedElement)
}

let previousGamePiece = null
function addGamePiece(selectedElement) {
  let newElement = document.createElement('h1')
  if (previousGamePiece === 'x') {
    // add text to element
    newElement.innerHTML = 'o'
    // set previousGamePiece
    previousGamePiece = 'o'
    // add text to element
  } else {
    newElement.innerHTML = 'x'
    // set previousGamePiece
    previousGamePiece = 'x'
  }
  //add element with text to selecedElement on page
  selectedElement.appendChild(newElement)
  console.log('show clicked div', selectedElement)
}



if (player1 = 'x') {
  newElement.innerHTML = 'o'
} else {
  newElement.innerHTML = 'x'
}