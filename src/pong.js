class Pong {


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


  addUserPaddle() {

    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    const that = this;

    paddle.id = 'user-paddle';
    paddle.style.bottom = '160px';
    paddle.style.left = '380px';

    game.appendChild(paddle);

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowUp") {
        that.moveUp(paddle, 10);
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowDown") {
        console.log(e);
        that.moveDown(paddle, 10);
      }
    });
  }

  addComputerPaddle() {

    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    paddle.id = 'computer-paddle';
    paddle.style.bottom = '160px';
    paddle.style.left = '10px';

    game.appendChild(paddle);
  }

  addBall() {

    const game = document.getElementById('game');
    let ball = document.createElement('div');

    ball.className += 'ball';
    ball.style.bottom = '193px';
    ball.style.left = '193px';

    game.appendChild(ball);
  }

  start() {
    setInterval(function(){ alert("Hello"); }, 50000);
  }

}
