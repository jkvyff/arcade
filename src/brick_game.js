class BrickGame {

  addPaddle() {
    let paddle = new BrickPaddle;
    paddle.createPaddle();
  }

  addBall() {
    let ball = new BrickBall;
    ball.createBall();
  }

  start() {
    let score = document.getElementById('score');
    score.textContent = 'score:0';

    let game = document.getElementById('game');
    let startButton = document.createElement('button');

    startButton.textContent = 'start'
    startButton.id = 'start'

    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      addBricks();
      addBall();
    })

    let highScores = document.getElementById('high-scores');

    let firstScore = document.createElement('li');
    let secondScore = document.createElement('li');
    let thirdScore = document.createElement('li');

    firstScore.id = 'first-score';
    secondScore.id = 'second-score';
    thirdScore.id = 'third-score';

    highScores.appendChild(firstScore);
    highScores.appendChild(secondScore);
    highScores.appendChild(thirdScore);

    game.appendChild(startButton);

    function addBricks() {

      let x = 5.2;
      let y = 10;

      let i;

      for (i = 1; i <= 30; i++) {
        let brick = new Brick;
        brick.createBrick(x, y, i)

        x += 66

        if (i != 0 && i % 6 == 0) {
          y += 30;
          x = 5.2;
        }
      }
    }

    function addBall() {
      let ball = new BrickBall;
      ball.createBall();
    }
  }
}
