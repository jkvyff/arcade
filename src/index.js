document.addEventListener('DOMContentLoaded', () => {
  main()

  function main() {
  	displayGamesList()
  }

  function displayGamesList() {
    displayRockDodger();
    displayPong();
    displayBrick();
  }

  function displayRockDodger() {
    let li = document.createElement('li');
    let game = document.createElement('div');
    game.id = 'rock-dodger';
    game.textContent = "Rock Dodger";
    li.appendChild(game);

    let gameList = document.getElementById('game-list');
    gameList.appendChild(li);

    game.addEventListener('click', () => {
      loadRockDodger();
    });


  }

  function displayPong() {
    let li = document.createElement('li');
    let game = document.createElement('div');
    game.id = 'pong';
    game.textContent = "Pong";
    li.appendChild(game);

    let gameList = document.getElementById('game-list');
    gameList.appendChild(li);

    game.addEventListener('click', () => {
      loadPong();
    });

  }

  function displayBrick() {
    let li = document.createElement('li');
    let game = document.createElement('div');
    game.id = 'brick';
    game.textContent = "Brick";
    li.appendChild(game);

    let gameList = document.getElementById('game-list');
    gameList.appendChild(li);

    game.addEventListener('click', () => {
      loadBrick();
    });
  }

  function loadRockDodger() {
  	let game = document.getElementById('game')
		let a = document.createElement('a')
		let div = document.createElement('div')
		let script = document.createElement('script');

		a.id = "start"
		a.href = "javascript:start()"
		a.textContent = "START"
		div.id = "dodger"
		div.style.bottom = "0px"
		div.style.left = "180px"
		script.src = 'src/rock_dodger.js';

		game.appendChild(a)
		game.appendChild(div)
		game.appendChild(script)
  }

  function loadPong() {
  	let game = document.getElementById('game')
		let a = document.createElement('a')
		let div = document.createElement('div')
		let script = document.createElement('script');

		a.id = "start"
		a.href = "javascript:start()"
		a.textContent = "START"
		div.id = "dodger"
		div.style.bottom = "0px"
		div.style.left = "180px"
		script.src = 'src/pong.js';

		game.appendChild(a)
		game.appendChild(div)
		game.appendChild(script)
  }

  function loadBrick() {
  	let game = document.getElementById('game')
		let a = document.createElement('a')
		let div = document.createElement('div')
		let script = document.createElement('script');

		a.id = "start"
		a.href = "javascript:start()"
		a.textContent = "START"
		div.id = "dodger"
		div.style.bottom = "0px"
		div.style.left = "180px"
		script.src = 'src/brick.js';

		game.appendChild(a)
		game.appendChild(div)
		game.appendChild(script)
  }
});
