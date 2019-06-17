const GAMES = ['Rock Dodger', 'Helicopter',]

document.addEventListener('DOMContentLoaded', (ev) => {
    console.log('DOM fully loaded');
    main() 
});

function main() {
	displayGamesList()
	loadGame(0)
}

function displayGamesList() {
	let gameList = document.getElementById('gameList');
	for (let i = 0; i < GAMES.length; i++) {
		displayGameInList(gameList, i);
	}
}

function displayGameInList(parent, game) {
	let li = document.createElement('li');

	li.textContent = GAMES[game];

	parent.appendChild(li);
}

function loadGame(gameNum) {
	let game = document.getElementById('game')
	switch(gameNum) {
		case 0:
			let a = document.createElement('a')
			let div = document.createElement('div')
			let script = document.createElement('script');   

			a.id = "start"
			a.href = "javascript:start()"
			a.textContent = "START"
			div.id = "dodger"
			div.style.bottom = "0px"
			div.style.left = "180px"
			script.src = 'src/rockDodger.js';

			game.appendChild(a)
			game.appendChild(div)
			game.appendChild(script)

			link.href = 'style.css'
			break;
		default:
	}
}