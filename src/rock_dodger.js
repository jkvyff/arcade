
class RockDodger {

  addDodger() {
    let dodger = new Dodger;
    dodger.createDodger();
  }

  start() {
    let game = document.getElementById('game');
    let startButton = document.createElement('button');

    startButton.textContent = 'start'
    startButton.id = 'start'

    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      startRocks();
    })

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
