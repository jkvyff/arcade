document.addEventListener('DOMContentLoaded', () => {
  main()

  function main() {
  	displayGamesList()
  }

  function displayGamesList() {
    displayGame("Rock Dodger");
    displayGame("Pong");
    displayGame("Brick");
  }

  function displayGame(name) {
    let li = document.createElement('li');
    let game = document.createElement('button');
    game.id = name.toLowerCase().replace(' ', '-');
    game.textContent = name;
    li.appendChild(game);

    let gameList = document.getElementById('game-list');
    gameList.appendChild(li);

    game.addEventListener('click', () => {
      switch(name) {
        case "Rock Dodger":
          loadRockDodger();
          break;
        case "Pong":
          loadPong();
          break;
        case "Brick":
          loadBrick();
          break;
      }
    });
  }

  function clearGame() {
    let main = document.querySelector('main')
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    let game = document.createElement('div')
    game.id = 'game';

    main.appendChild(game);
  }

  function loadRockDodger() {
    clearGame();
    let game = document.getElementById('game');

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
    clearGame();
    let pong = new Pong;

    pong.addUserPaddle();
    pong.addComputerPaddle();
    pong.addBall();
  }



  function loadBrick() {
    clearGame();
    let brick = new Brick;

    brick.addBricks();
    brick.addBall();
    brick.addPaddle();
  }
});
