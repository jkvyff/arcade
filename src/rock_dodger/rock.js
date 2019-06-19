class Rock {

  checkCollision(rock) {

    let bottom = parseInt(rock.style.bottom)
    let dodger = document.getElementById('dodger')

    if (bottom < 25) {
      const dodgerLeftEdge = parseInt(dodger.style.left)
      const dodgerRightEdge = dodgerLeftEdge + 40;
      const rockLeftEdge = parseInt(rock.style.left)
      const rockRightEdge = rockLeftEdge + 60;

      if ((rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) ||
          (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerRightEdge) ||
          (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)) {
        return true
      }
    }
  }

  createRock(x) {

    let game = document.getElementById('game');
    let rock = document.createElement('div');

    rock.className = 'rock'
    rock.style.left = `${x}px`

    rock.style.bottom = '390px';

    game.appendChild(rock);

    const that = this;
    let score = document.getElementById('score');
    let i = 1;

    function animate() {

      rock.style.bottom = parseInt(rock.style.bottom) + -1 + 'px';

      setTimeout(function () {
        if (that.checkCollision(rock)){

          let score = document.getElementById('score');
          console.log(score.textContent.substr(6))

          let payload = {score: `${score.textContent.substr(6)}`, game_id: '1', player: 'none'};
          console.log(payload)

          fetch('http://localhost:3000/scores', {
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

          let yourScore = document.createElement('div')
          yourScore.id = 'your-score';
          yourScore.textContent = `your score: ${score.textContent.substr(6)}`

          game.appendChild(yourScore);
          main.appendChild(game);

          let highScores = document.createElement('ul');
          highScores.id = 'high-scores';
          main.appendChild(highScores);

          loadScores();

          function loadScores() {
            fetch('http://localhost:3000/scores')
            .then(res => res.json())
            .then(json => {
              displayScores(json);
            })
          }

          function displayScores(json) {
            let scoreArr = [];
            for (let i = 0; i < json.length; i++) {
              if (json[i].game_id == 1) {
                scoreArr.push(json[i]);
              }
            }
            console.log(scoreArr);
            scoreArr.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));

            scoreArr.forEach((scr) => {
              let score = document.createElement('li');
              score.className += 'high-scores';
              score.textContent = `${scr.player}: ${scr.score}`;

              highScores.appendChild(score);
            });
          }

        } else {
          if (parseInt(rock.style.bottom) > 0) {
            animate()
          } else {
            rock.remove();
            console.log(score.textContent.substr(6));
            score.textContent = `score: ${parseInt(score.textContent.substr(6)) + 1}`;
          }
        }
      }, 1);
    }
    animate();
  }
}
