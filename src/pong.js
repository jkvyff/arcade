class Pong {

  constructor() {
    this.gameInterval = null;
    this.score = 0;
  }

  addUserPaddle() {
    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    paddle.id = 'user-paddle';
    paddle.style.bottom = '160px';
    paddle.style.left = '10px';

    game.appendChild(paddle);
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
    
    ball.className += 'ball';
    ball.style.bottom = '193px';
    ball.style.left = '193px';

    game.appendChild(ball);
  }

  checkCollision(ballObj, user, comp ) {
    let min = 8
    let halfH = 40
    console.log(ballObj, user, comp);
    if (ballObj.x > 385 || ballObj.x < 5) {
      // check if ball hit front or back wall
      return this.endGame();
    } else if ((ballObj.x - user.x < min) && (ballObj.y - user.y > 70) && (ballObj.y - user.y <= 85)) {
      // check top of user paddle for collision
      return 3;
    } else if ((ballObj.x - user.x < min) && (ballObj.y - user.y > -5) && (ballObj.y - user.y <= 10)) {
      // check botton of user paddle for collision
      return 4;
    } else if ((ballObj.x - user.x < min) && (ballObj.y - user.y > 0) && (ballObj.y - user.y <= 80)) {
      // check mid of user paddle for collision
      return 1;
    } else if ((comp.x - 6 - ballObj.x < min) && (ballObj.y - comp.y > 0) && (comp.y - ballObj.y <= 80)) {
      //check if ball hit computer paddle
      return 1;
    } else if (ballObj.y > 385 || ballObj.y < 5) {
      return 2;
    }
    return 0;
  }

  update(ballObj, user, comp) {
    // ball movement
    switch(this.checkCollision(ballObj, user, comp)) {
      case 0:
        break;
      case 3:
        ballObj.vectY = ballObj.vectY + 1;
        ballObj.vectX = -ballObj.vectX;
        break
      case 4:
        ballObj.vectY = ballObj.vectY - 1;
        ballObj.vectX = -ballObj.vectX;
        break;
      case 1:
        ballObj.vectX = -ballObj.vectX;
        break;
      case 2:
        ballObj.vectY = -ballObj.vectY;
        break;
    }
    ballObj.x = ballObj.x + ballObj.vectX;
    ballObj.y = ballObj.y + ballObj.vectY;

    // computer movement
    if (ballObj.y - comp.y > 12) {
      comp.y = comp.y + ballObj.vectY;
    } else if (ballObj.y - comp.y < 12) {
      comp.y = comp.y - ballObj.vectY;
    }
  }

  draw(ballObj, user, comp) {
    let ball = document.querySelector('.ball');
    ball.style.left = ballObj.x +'px';
    ball.style.bottom = ballObj.y +'px';

    let player = document.getElementById('user-paddle');
    player.style.left = user.x+'px';
    player.style.bottom = user.y+'px';

    let computer = document.getElementById('computer-paddle');
    computer.style.left = comp.x+'px';
    computer.style.bottom = comp.y+'px';
  }

  addListen(user) {
    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowUp" && user.y < 310) {
        user.y = user.y + 7;
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowDown" && user.y > 7) {
        user.y = user.y - 7;
      }
    });
  }

  start() {

    let ballObj = new Ball(192, 192, 0, 0);
    let user = new Paddle(10, 160);
    let comp = new Paddle(380, 160);
    let that = this;
    ballObj.vectX = -5;
    ballObj.vectY = 3;
    this.addListen(user);

    this.gameInterval = setInterval(function(){ 
      that.update(ballObj, user, comp);
      that.draw(ballObj, user, comp);
    }, 30);
  }

  endGame(ballObj, user, comp) {
    ballObj = null;
    user = null;
    comp = null;
    clearInterval(this.gameInterval);
    alert('howdy');
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

class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
