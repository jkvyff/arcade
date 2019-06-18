class Pong {


  addUserPaddle() {


    /////////////paddle object//////////////

    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    paddle.id = 'user-paddle';
    paddle.style.bottom = '160px';
    paddle.style.left = '380px';

    game.appendChild(paddle);



    ///////////paddle movement////////////

    function moveDown() {
      if (parseInt(paddle.style.bottom) < 310) {
        paddle.style.bottom = parseInt(paddle.style.bottom) + -10 + 'px';
      }
    }

    function moveUp() {
      if (parseInt(paddle.style.bottom) > 5.2) {
        paddle.style.bottom = parseInt(paddle.style.bottom) + 10 + 'px';
      }
    }


    ///////////////movement listeners//////////////


    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowUp") {
        moveUp();
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowDown") {
        console.log(e);
        moveDown();
      }
    });
  }


  addComputerPaddle() {


    /////////////paddle object//////////////

    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    paddle.id = 'computer-paddle';
    paddle.style.bottom = '160px';
    paddle.style.left = '10px';

    game.appendChild(paddle);



    ///////////paddle movement////////////

    function moveDown() {
      if (parseInt(paddle.style.bottom) < 310) {
        paddle.style.bottom = parseInt(paddle.style.bottom) + 10 + 'px';
      }
    }

    function moveUp() {
      if (parseInt(paddle.style.bottom) > 5.2) {
        paddle.style.bottom = parseInt(paddle.style.bottom) + -10 + 'px';
      }
    }
  }


  addBall() {

    ///////////ball object////////////

    const game = document.getElementById('game');
    let ball = document.createElement('div');

    ball.className += 'ball';
    ball.style.bottom = '193px';
    ball.style.left = '193px';

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

}
