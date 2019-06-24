class BrickGame {

  constructor() {
    this.score = 0;
    this.leaderboard = [];
    this.bricks = [];
    this.ball = null;
    this.paddle = null;
    this.gameInterval = null;
  }

  addPaddle() {
    this.paddle = new BrickPaddle(5, 7);
    this.paddle.createPaddle();

  }

  addBall() {
    this.ball = new Ball(193, 200);
    this.ball.createBall();
  }

  addBricks() {
    let x = 5;
    let y = 380;

    let bricks = []
    for (let i = 1; i <= 30; i++) {
      let brick = new Brick(x, y, i);
      bricks.push(brick);
      brick.createBrick();

      x += 66

      if (i != 0 && i % 6 == 0) {
        y -= 30;
        x = 5;
      }
    }
    this.bricks = bricks;
    console.log(this.bricks);
  }

  loadScores() {
    return fetch(BASE_URL)
    .then(res => res.json())
    .then(json => { this.filterScores(json)} );
  }

  filterScores(json) {
    let scoreArr = [];
    for (let i = 0; i < json.length; i++) {
      if (json[i].game_id == 3) {
        scoreArr.push(json[i]);
      }
    }
    scoreArr.length = 7;
    this.leaderboard = scoreArr;
    this.displayScores();
  }

  displayScores() {
    let highScores = document.getElementById('high-scores');

    this.leaderboard.forEach((scr) => {
      let score = document.createElement('li');
      score.className += 'high-scores';
      score.textContent = `${scr.player}: ${scr.score}`;

      highScores.appendChild(score);
    });
  }

  addListen(user) {
    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowRight" && user.x < 310) {
        user.x = user.x + 7;
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowLeft" && user.x > 7) {
        user.x = user.x - 7;
      }
    });
  }


  start() {
    let score = document.getElementById('score');
    score.textContent = `score:${this.score}`;

    let game = document.getElementById('game');
    let startButton = document.createElement('button');

    startButton.textContent = 'start'
    startButton.id = 'start'

    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      let user = this.paddle;
      user.addListen();
      this.playLoop()
    })

    this.loadScores();

    game.appendChild(startButton);
  }

  positionCollide() {
    let row, col;
    let right = this.ball.x + this.ball.diam;
    let top = this.ball.y + this.ball.diam;

    if(top >= 260) {
      if (right < 66) {col = 1} else
      if (this.ball.x >= 71 && this.ball.x < 131) {col = 2} else
      if (this.ball.x >= 137 && this.ball.x < 198) {col = 3} else
      if (this.ball.x >= 203 && this.ball.x < 264) {col = 4} else
      if (this.ball.x >= 269 && this.ball.x < 330) {col = 5} else
      if (right > 335) {col = 6}
    
      if (this.ball.y < 285) {row = 5} else
      if (top >= 290 && this.ball.y < 305) {row = 4} else
      if (top >= 320 && this.ball.y < 335) {row = 3} else
      if (top >= 350 && this.ball.y < 365) {row = 2} else
      if (top > 370) {row = 1}
    
      console.log(row, col)
      if (row && col) {
        let ans = (row - 1) * 6 + col
        return ans;
      }
    }
    return false;
  }

  checkCollision() {
    let min = 10;
    let user = this.paddle;

    if (this.ball.x > 390 || this.ball.x < 0) {
      return 1
    } else if (this.ball.y > 390) {
      return 2;
    } else if (this.ball.y < 0) { // ball off bottom of screen
      return 0;
    } else if ((this.ball.x - user.x > -7) && (this.ball.x - user.x <= 8) && (this.ball.y - user.y <= 7) && (this.ball.y - user.y <= min)) {
      // check left of user paddle for collision
      return 3;
    } else if ((this.ball.x - user.x > 58) && (this.ball.x - user.x <= 73) && (this.ball.y - user.y <= 7) && (this.ball.y - user.y <= min)) {
      // check right of user paddle for collision
      return 4;
    } else if ((this.ball.x - user.x > 8) && (this.ball.x - user.x <= 58) && (this.ball.y - user.y <= 7) && (this.ball.y - user.y <= min)) {
      // check mid of user paddle for collision
      return 2;
    } else {
      let id = this.positionCollide();
      if (id) {
        this.deleteAndScoreCollidedBrick(id);
      }
    }
  }

  deleteAndScoreCollidedBrick(id) {
    for(let i = 0; i < this.bricks.length; i++) {
      if (this.bricks[i].id === id) {
        this.bricks[i].destroyBrick();
        this.bricks.splice(i, 1);
        this.scoreOne();
        this.ball.vectY = -this.ball.vectY
      }
    }
    return false;
  }

  scoreOne() {
    let score = document.getElementById('score');
    this.score += 1;
    score.textContent = `score: ${this.score}`;
  }

  update() {
    switch(this.checkCollision()) {
      case 0:
        this.endGame();
        break;
      case 1:
        this.ball.vectX = -this.ball.vectX;
        break;
      case 2:
        this.ball.vectY = -this.ball.vectY;
        break;
      case 3:
        if(this.ball.vectX < 2.0) { this.ball.vectX = this.ball.vectX - 1 }
        this.ball.vectY = -this.ball.vectY;
        break;
      case 4:
        if(this.ball.vectX < 2.0) { this.ball.vectX = this.ball.vectX + 1 }
        this.ball.vectY = -this.ball.vectY;
        break;
    }
    this.ball.x = this.ball.x + this.ball.vectX;
    this.ball.y = this.ball.y + this.ball.vectY;
    console.log(this.ball)
  }

  draw() {
    let ball = document.querySelector('.ball');
    ball.style.left = this.ball.x + 'px';
    ball.style.bottom = this.ball.y + 'px';

    let paddle = document.getElementById('brick-paddle')
    paddle.style.left = this.paddle.x + 'px';
    paddle.style.bottom = this.paddle.y + 'px';

    console.log(this.ball.y)

    if (this.bricks.length === 0) {
      this.addBricks();
    }
  }

  playLoop() {
    this.addBricks();
    this.addBall();
    this.addListen(this.paddle);
    this.ball.vectX = -3;
    this.ball.vectY = -3;
    let that = this;

    this.gameInterval = setInterval(function(){
      that.update();
      that.draw();
    }, 15);
  }

  endGame() {
    this.ball = null;
    this.paddle = null;
    this.bricks = null;
    clearInterval(this.gameInterval);

    let score = document.getElementById('score');
    console.log(score.textContent.substr(6))

    let main = document.querySelector('main')
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    let game = document.createElement('div')
    game.id = 'game';

    let yourScore = document.createElement('div')
    yourScore.id = 'your-score';
    yourScore.textContent = `your score: ${score.textContent.substr(6)}`

    let enterInitials = document.createElement('FORM');

    let enterInitialsText = document.createElement('input');

    enterInitialsText.setAttribute("type", "text");
    enterInitialsText.setAttribute("value", "");
    enterInitialsText.setAttribute("name", "name");
    enterInitialsText.setAttribute("maxlength", "3");
    enterInitialsText.id = 'enter-initials-text';

    let newLine = document.createElement('br');

    let enterInitialsSubmit = document.createElement('input');
    enterInitialsSubmit.setAttribute("type", "submit");
    enterInitialsSubmit.setAttribute("value", "Submit");
    enterInitialsSubmit.id = 'initials-submit';

    enterInitials.appendChild(enterInitialsText);
    enterInitials.appendChild(newLine);
    enterInitials.appendChild(enterInitialsSubmit);

    enterInitials.addEventListener('click', (e) => {
      e.preventDefault();

      if (enterInitials.name.value != "") {
        let payload = {score: `${this.score}`, game_id: '3', player: `${enterInitials.name.value.toUpperCase()}`};
        fetch(BASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        let main = document.querySelector('main')
        while (main.firstChild) {
          main.removeChild(main.firstChild);
        }

        let game = document.createElement('div')
        game.id = 'game';

        main.appendChild(game);
      }
    })

    game.appendChild(yourScore);
    game.appendChild(enterInitials);
    main.appendChild(game);



    let highScores = document.createElement('ol');
    highScores.id = 'high-scores';
    main.appendChild(highScores);

    this.loadScores();
  }
}
