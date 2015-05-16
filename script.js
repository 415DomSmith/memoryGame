for (i = 0 ; i < 16 ; i++) {
	var square = document.createElement('div')
	square.style.width = "20%"
	square.style.float = "left"
	square.style.paddingBottom = "18%"
	square.style.paddingLeft= "26px"
	square.style.backgroundColor = "white"
	square.style.border = "1px solid black"
	square.style.borderRadius = "10px"
	square.style.marginLeft = "5px"
	square.style.marginTop = "3px"
	document.getElementById("gameBoard").appendChild(square);
}