// init variables
var pTag = document.querySelector('p');
var button = document.querySelector('#buttonID');
var display = document.querySelector('#display');



// button handlers
button.onclick = function() {
    display.classList.add('show');
    button.classList.add('hide');
}
button.onmouseover = function() {
	button.classList.add('hover');
} 
button.onmouseout = function() {
	button.classList.remove('hover');
} 
