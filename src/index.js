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
    let game = document.createElement('button');
    game.id = 'rock-dodger';
    game.textContent = "ROCK DODGER";
    li.appendChild(game);

    let gameList = document.getElementById('game-list');
    gameList.appendChild(li);

    game.addEventListener('click', () => {
      loadRockDodger();
    });

    let divider = document.createElement('li');
    divider.textContent = '|';

    gameList.appendChild(divider);
  }

  function displayPong() {
    let li = document.createElement('li');
    let game = document.createElement('button');
    game.id = 'pong';
    game.textContent = "PONG";
    li.appendChild(game);

    let gameList = document.getElementById('game-list');
    gameList.appendChild(li);

    game.addEventListener('click', () => {
      loadPong();
    });

    let divider = document.createElement('li');
    divider.textContent = '|';

    gameList.appendChild(divider);
  }

  function displayBrick() {
    let li = document.createElement('li');
    let game = document.createElement('button');
    game.id = 'brick';
    game.textContent = "BRICK";
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
		div.id = "pong"
		div.style.bottom = "0px"
		div.style.left = "180px"
		script.src = 'src/pong.js';

		game.appendChild(a)
		game.appendChild(div)
		game.appendChild(script)
  }

  function loadBrick() {
    let brick = new Brick;

    brick.addBricks();
    brick.addBall();
    brick.addPaddle();
  }
});
