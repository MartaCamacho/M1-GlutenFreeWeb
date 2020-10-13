const limit_size_screen = window.matchMedia('screen and (max-width: 768px)');
const bars = document.querySelector('.bars');
const barsButton = document.querySelector('#bars-button');

function validation(event) {
	if (event.matches) {
		barsButton.addEventListener('click', hideShow);
	} else {
		barsButton.removeEventListener('click', hideShow);
	}
}
validation(limit_size_screen);

function hideShow() {
	if (bars.classList.contains('is-active')) {
		bars.classList.remove('is-active');
	} else {
		bars.classList.add('is-active');
	}
}


//test a ver si puedo meter la info

let newRandomRecipe = document.createElement('div');

let divRandom = document.getElementById('randomRecipe');

divRandom.appendChild(newRandomRecipe)
