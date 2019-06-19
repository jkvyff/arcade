
class RockDodger {

  addDodger() {
    let dodger = new Dodger;
    dodger.createDodger();
  }

  start() {

    let score = document.getElementById('score');
    score.textContent = 'score:0';


    let game = document.getElementById('game');
    let startButton = document.createElement('button');

    startButton.textContent = 'start'
    startButton.id = 'start'

    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      startRocks();
    })

    let highScores = document.getElementById('high-scores');

    let firstScore = document.createElement('li');
    let secondScore = document.createElement('li');
    let thirdScore = document.createElement('li');

    firstScore.id = 'first-score';
    secondScore.id = 'second-score';
    thirdScore.id = 'third-score';

    firstScore.className += 'high-scores';
    secondScore.className += 'high-scores';
    thirdScore.className += 'high-scores';

    firstScore.textContent = 'SMW: 100';
    secondScore.textContent = 'CSW: 23';
    thirdScore.textContent = 'BOB: 12';

    highScores.appendChild(firstScore);
    highScores.appendChild(secondScore);
    highScores.appendChild(thirdScore);

    game.appendChild(startButton);


    function startRocks() {
      let rock = new Rock;

      function deployRocks() {
        if (document.getElementById('dodger')) {
          setTimeout(function () {
            deployRocks();
            rock.createRock(Math.floor(Math.random() * 340) + 10);
          }, 400);
        } else {
          rock.remove();
        }
      }
      deployRocks();
    }
  }
}
