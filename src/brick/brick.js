class Brick {

  constructor(x, y, id) {
  	this.x = x;
  	this.y = y;
  	this.id = id;
  	this.height = 15;
  	this.width = 60;
  	this.color = '#00ff00';
  }

  createBrick() {

    const game = document.getElementById('game');
    let brick = document.createElement('div');

    brick.className += 'brick';

    brick.style.left = `${this.x}px`;
    brick.style.bottom = `${this.y}px`;
    brick.style.height = `${this.height}px`;
    brick.style.width = `${this.width}px`;
    brick.style.backgroundColor = this.color

    brick.id = this.id;

    game.appendChild(brick);
  }

  destroyBrick() {
  	let brick = document.getElementById(this.id);
  	brick.remove();
  }
}
