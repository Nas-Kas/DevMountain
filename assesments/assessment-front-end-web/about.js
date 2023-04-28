console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("YOUR FORM HAS BEEN SUBMITTED!");
}

function complimentUser(e){
	e.preventDefault();
	alert("YOU ARE FILLED WTIH DETERMINATION!");
}

let form = document.querySelector('#contact');
let catPic = document.querySelector('#catpic');

form.addEventListener('submit', handleSubmit);
catPic.addEventListener('mouseover', complimentUser);