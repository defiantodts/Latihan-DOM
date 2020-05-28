
const button = document.querySelector('.button');

button.addEventListener('click', function(){
	document.body.style.backgroundColor = "lightblue";
});

const newButton = document.createElement('button');
const random = document.createTextNode('Random Color');
newButton.appendChild(random);
newButton.setAttribute('type', 'button');

button.after(newButton);

newButton.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
});

const sRed = document.getElementById('sRed');
const sGreen = document.getElementById('sGreen');
const sBlue = document.getElementById('sBlue');

sRed.addEventListener('input', function(){
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
});
sGreen.addEventListener('input', function(){
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
});
sBlue.addEventListener('input', function(){
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
});

