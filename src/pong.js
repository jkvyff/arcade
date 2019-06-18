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

  moveElement(element, x, y) {
    element.style.left = x + 'px';
    element.style.bottom = y + 'px';
  }


  addUserPaddle() {
    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    paddle.id = 'user-paddle';
    paddle.style.bottom = '160px';
    paddle.style.left = '10px';

    game.appendChild(paddle);

    const that = this;

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
    paddle.style.left = '380px';

    game.appendChild(paddle);
  }

  addBall() {

    const game = document.getElementById('game');
    let ball = document.createElement('div');
    let ballObj = new Ball(193, 193, 0, 0);
    
    ball.className += 'ball';
    ball.style.bottom = ballObj.y+'px';
    ball.style.left = ballObj.x+'px';

    game.appendChild(ball);
    return ballObj;
  }

  checkCollision(ballObj) {
    if (ballObj.x > 385 || ballObj.x < 5) {
      return 1;
    } else if (ballObj.y > 385 || ballObj.y < 5) {
      return 2;
    }
    return 0
  }

  update(ballObj) {
    if (this.checkCollision(ballObj) === 0) {
    } else if (this.checkCollision(ballObj) === 1) {
        ballObj.vectX = -ballObj.vectX
    } else if (this.checkCollision(ballObj) === 2) {
        ballObj.vectY = -ballObj.vectY
    }
    ballObj.x = ballObj.x + ballObj.vectX
    ballObj.y = ballObj.y + ballObj.vectY
  }

  draw(ballObj) {
    let ball = document.querySelector('.ball');
    ball.style.bottom = ballObj.y+'px';
    ball.style.left = ballObj.x+'px';
  }

  start(ballObj) {
    let ball = document.querySelector('.ball');
    let that = this;
    ballObj.vectX = -7;
    ballObj.vectY = 3;
    setInterval(function(){ 
      that.update(ballObj)
      that.draw(ballObj);
      console.log(ballObj)
    }, 50);
  }
}

class Ball {
  constructor(x, y, vectX, vectY) {
    this.x = x;
    this.y = y;
    this.vectX = vectX;
    this.vectY = vectY;
  }
}
