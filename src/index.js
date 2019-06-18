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
    let rock_dodger = new RockDodger;

    rock_dodger.addDodger();
    rock_dodger.start();
  }

  function loadPong() {
    clearGame();
    let pong = new Pong();

    pong.addUserPaddle();
    pong.addComputerPaddle();
    let ball = pong.addBall();
    pong.start(ball);
  }

  function loadBrick() {
    clearGame();
    let brick = new BrickGame;

    brick.addBricks();
    brick.addBall();
    brick.addPaddle();
  }
});
