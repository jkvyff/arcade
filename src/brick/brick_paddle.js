class BrickPaddle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  createPaddle() {

    const game = document.getElementById('game');
    let paddle = document.createElement('div');

    paddle.id = 'brick-paddle';
    paddle.style.left = this.x + 'px';
    paddle.style.bottom = this.y + 'px';

    game.appendChild(paddle);
  }

  addListen() {
    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowRight" && this.x < 310) {
        user.x = user.x + 10;
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowLeft" && this.x > 7) {
        this.x = this.x - 10;
      }
    });
  }
}
