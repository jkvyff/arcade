class Brick {

  addBall() {

    ///////////ball object////////////

    const game = document.getElementById('game');
    let ball = document.createElement('div');

    ball.id = 'ball';
    ball.style.bottom = '200px';
    ball.style.left = '192px';

    game.appendChild(ball);


    ///////////ball movement/////////

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


    /////////////paddle object//////////////

    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    paddle.id = 'paddle';
    paddle.style.bottom = '7px';
    paddle.style.left = '165px';

    game.appendChild(paddle);


    ///////////paddle movement////////////

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
  }


  addBricks() {

    /////////////////coordinates for initial brick///////////////

    let x = 5.2;
    let y = 10;


    ////////////creation iteration/////////////

    let i;

    for (i = 0; i <= 30; i++) {


      ///////////object creation/////////////

      const game = document.getElementById('game');
      let brick = document.createElement('div');

      brick.className += 'brick';

      brick.style.left = `${x}px`;
      brick.style.top = `${y}px`;

      game.appendChild(brick);


      //////////////adding bricks to row/////////////

      x += 66


      ///////////////////new row after every 6 bricks/////////

      if (i != 0 && i % 6 == 0) {
        console.log(i);
        y += 30;
        x = 5.2;
      }
    }
  }

  addEventListeners() {
    let paddle = document.getElementById('paddle')

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

    var handleKeyLeft = function(e) {
      if (e.key === "ArrowLeft") {
        moveLeft();
      }
    }

    var handleKeyRight = function(e) {
      if (e.key === "ArrowRight") {
        moveRight();
      }
    }

    document.addEventListener("keydown", handleKeyLeft);
    document.addEventListener("keydown", handleKeyRight);
  }
}
