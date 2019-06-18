class Brick {

  addBall() {

    const game = document.getElementById('game');
    let ball = document.createElement('div');

    ball.className += 'ball';
    ball.style.bottom = '200px';
    ball.style.left = '192px';

    game.appendChild(ball);

    function moveRight() {
      if (parseInt(ball.style.left) < 310) {
        ball.style.left = parseInt(ball.style.left) + 10 + 'px';
      }
    }

    function moveLeft() {
      if (parseInt(ball.style.left) > 5.2) {
        ball.style.left = parseInt(ball.style.left) + -10 + 'px';
      }
    }

    function moveUp() {
      ball.style.bottom = parseInt(ball.style.bottom) + 10 + 'px';
    }

    function moveDown() {
        ball.style.bottom = parseInt(ball.style.bottom) + -10 + 'px';
    }
  }



  addPaddle() {

    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    paddle.id = 'brick-paddle';
    paddle.style.bottom = '7px';
    paddle.style.left = '5.2px';

    game.appendChild(paddle);

    function moveRight() {
      if (parseInt(paddle.style.left) < 310) {
        paddle.style.left = parseInt(paddle.style.left) + 10 + 'px';
      }
    }

    function moveLeft() {
      if (parseInt(paddle.style.left) > 5.2) {
        paddle.style.left = parseInt(paddle.style.left) + -10 + 'px';
      }
    }

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowLeft") {
        moveLeft();
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowRight") {
        console.log(e);
        moveRight();
      }
    });
  }


  addBricks() {

    let x = 5.2;
    let y = 10;

    let i;

    for (i = 1; i <= 30; i++) {

      const game = document.getElementById('game');
      let brick = document.createElement('div');

      brick.className += 'brick';

      brick.style.left = `${x}px`;
      brick.style.top = `${y}px`;

      brick.id = i;

      game.appendChild(brick);

      x += 66

      if (i != 0 && i % 6 == 0) {
        console.log(i);
        y += 30;
        x = 5.2;
      }
    }
  }
}
