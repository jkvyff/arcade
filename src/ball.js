class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vectX = 0;
    this.vectY = 0;
    this.diam = 14;
    this.color = '#00ff00';
  }

  createBall() {

    const game = document.getElementById('game');
    let ball = document.createElement('div');

    ball.className += 'ball';
    ball.style.left = `${this.x}px`;
    ball.style.bottom = `${this.y}px`;
    ball.style.height = `${this.diam}px`;
    ball.style.width = `${this.diam}px`;
    ball.style.backgroundColor = this.color;

    game.appendChild(ball);
  }
}
