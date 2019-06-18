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
    let game = document.getElementById('game');
    let startButton = document.createElement('button');

    startButton.textContent = 'start'
    startButton.id = 'start'

    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      addBricks();
      addBall();
    })

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
