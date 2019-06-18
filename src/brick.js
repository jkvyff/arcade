class Brick {

  moveRight(element, pace) {
    if (parseInt(element.style.left) < 310) {
      element.style.left = parseInt(element.style.left) + pace + 'px';
    }
  }

  moveLeft(element, pace) {
    if (parseInt(element.style.left) > 5.2) {
      element.style.left = parseInt(element.style.left) + -pace + 'px';
    }
  }

  moveUp(element, pace) {
    if (parseInt(element.style.bottom) > 5.2) {
      element.style.bottom = parseInt(element.style.bottom) + pace + 'px';
    }
  }

  moveDown(element, pace) {
    if (parseInt(element.style.bottom) < 310) {
      element.style.bottom = parseInt(element.style.bottom) + -pace + 'px';
    }
  }


  addBall() {

    const game = document.getElementById('game');
    let ball = document.createElement('div');

    ball.className += 'ball';
    ball.style.bottom = '200px';
    ball.style.left = '192px';

    game.appendChild(ball);
  }


  addPaddle() {

    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    const that = this;

    paddle.id = 'brick-paddle';
    paddle.style.bottom = '7px';
    paddle.style.left = '5.2px';

    game.appendChild(paddle);

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowLeft") {
        that.moveLeft(paddle, 10);
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowRight") {
        that.moveRight(paddle, 10);
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
