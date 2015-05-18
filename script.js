//The game must consist of at least 16 cards
//A user can click two cards each turn. If they are a match, the cards stay overturned. Otherwise, both cards flip back over.
//A score display that shows how many matches a user has made
//If the user matches all the cards, display a congratulations message
//A reset button which will restart the game and reset the cards
//Style it. Make it look nice.
//Deploy it to Github Pages.
//Submit the link.
//Bonus Features
//Add a card-flipping animation when the user clicks a card
//Add a time limit. If the time expires, show the user a game over screen




// setup global variables to track progress
var pickTotal = 0;
var selection1 = "";
var selection1Id = 0;
var selection2 = "";
var selection2Id = 0;
var score = 0



//Store card images in an array
var images = ["img/img1.jpeg","img/img2.jpeg","img/img3.jpeg","img/img4.jpeg","img/img5.jpeg","img/img6.jpeg","img/img7.jpeg","img/img8.jpeg","img/img9.jpeg","img/img10.jpeg","img/img11.jpeg","img/img12.jpeg","img/img13.jpeg","img/img14.jpeg","img/img15.jpeg","img/img16.jpeg","img/img17.jpeg","img/img18.jpeg","img/img19.jpeg","img/img20.jpeg","img/img21.jpeg","img/img22.jpeg","img/img23.jpeg"]


//shuffle images array

function shuffle(arr) {
  for(var i = 0; i < arr.length; i++) {
    var arrVal = arr[i];
    var randoNum = Math.floor(Math.random()* arr.length);
    var randoIndex = arr[randoNum];
    arr[i] = randoIndex;
    arr[randoNum] = arrVal; 
  }
  return arr;
};

var imgBank = shuffle(images);

//take first 8 images from shuffled array and create a new array with just those 8.
var imgBank8 = imgBank.slice(0, 8)
//double imgBank8 in to a new array
var imgBank16 = imgBank8.concat(imgBank8);
//shuffle our new 16 image array to create the game cards we're going to use.
var cards = shuffle(imgBank16);
console.log(cards);//to cheat

//Setup the game board
var memoryBoard = document.getElementById("memoryBoard");
for (i = 0 ; i < 16; i++) {
    var square = document.createElement('div');
    square.className = cards[i];
    square.id = i;
    square.title = "open" //use title attribute to check status of card (open, picked, or match)
    square.style.width = "20%";
    square.style.float = "left";
    square.style.paddingBottom = "18%";
    square.style.paddingLeft= "26px";
    square.style.backgroundImage = 'url(img/topCard.jpg)';
    square.style.backgroundSize = "contain";
    square.style.border = "2px solid black";
    square.style.borderRadius = "10px";
    square.style.marginLeft = "5px";
    square.style.marginTop = "3px";
    square.style.transition = "all 1s";

    square.addEventListener("mousedown", function(){
      var cardStatus = this.title;

      if (cardStatus === "open") {
      this.style.borderColor = "red";
      this.style.backgroundImage = 'url('+ this.className + ')';
      this.style.backgroundSize = "auto";

      if (pickTotal === 0 ){
        selection1 = this.className;
        selection1Id = this.id;
        pickTotal++;
        this.title = "picked";
      } else if (pickTotal === 1 ) {
        selection2 = this.className;
        selection2Id = this.id;
        pickTotal++;
        this.title = "picked";

        if(selection1 == selection2 && selection1Id != selection2Id) {
          matchFound();
        } else {
          didNotMatch();
        }
      }
    }
    });

    document.getElementById("gameBoard").appendChild(square);
  }

//to run when a match is found
function matchFound(){
	score+= 100;
	document.getElementById("gamePrompt").innerHTML = "You Found a Match! Your Current Score is " + score;
  var resetSelection1 = document.getElementById(selection1Id);
  var resetSelection2 = document.getElementById(selection2Id);
  resetSelection1.style.borderColor = "#00FF0E";
  resetSelection2.style.borderColor = "#00FF0E";
  resetSelection1.title = "match";  
  resetSelection2.title = "match";
  pickTotal = 0;
  }

//to run if a match is not found (after 2nd choice)
function didNotMatch(){ 
  pickTotal = 0;
  score-= 10;
  setTimeout(resetPieces,600);
}

//reset pieces if they weren't a match
function resetPieces() {
		document.getElementById("gamePrompt").innerHTML = "Try Again! Your Current Score is " + score;
    var resetSelection1 = document.getElementById(selection1Id);
    var resetSelection2 = document.getElementById(selection2Id);
    resetSelection1.title = "open"; // so it can be selected again
    resetSelection2.title = "open";
    resetSelection1.style.borderColor = "black";
    resetSelection2.style.borderColor = "black";
    resetSelection1.style.backgroundImage = 'url(img/topCard.jpg)';
    resetSelection1.style.backgroundSize = "contain";
    resetSelection2.style.backgroundImage = 'url(img/topCard.jpg)';
    resetSelection2.style.backgroundSize = "contain";
}

var reset = document.getElementById("resetButton");
reset.addEventListener("click", function(){
		window.location.reload();
	});



//-------------------




























