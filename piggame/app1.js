    /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
NEW1 - player throws a six two times in a row, player loses entire score and it's the next players turn
NEW2 - Added an inputfield for the players to change the winning score
NEW3 - give the players the option to play with the new rule if they want(throwing 2x 6 = 0 points)
BUGS to fix: show message if a 6 is thrown & prevent dicecheck for a one, if 2x a 6 is thrown, to prevent mixed messages.

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var prevDice;
var prevDice1;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) { 
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        var diceDom1 = document.querySelector('.dice1');
        diceDom1.style.display = 'block';
        diceDom1.src = 'dice-' + dice1 + '.png';

        // 3. Update the round score, IF the rolled number was NOT 1 or 6
        // checked property returns true/false if its enabled
        var checkbox = document.getElementById('option').checked;

        // debugging information, opening the console on the browser should display the current value
        console.info("checkbox: " + checkbox);
       
        // if new rule enabled, do extra test

        // doesnt matter if new rule is enabled, always do the "normal" tests
        if (dice === 1 || dice1 === 1) {
            // show message and next player
            document.getElementById('m1').style.display = 'block';
            document.getElementById('m6').style.display = 'none';
            console.info("1");  
            nextPlayer();
        }
        else { // !== 1
            //hide messages and Add score
            document.getElementById('m1').style.display = 'none';
            document.getElementById('m6').style.display = 'none';
            roundScore += dice; //roundscore = roundscore + dice
            roundScore += dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }

        if (checkbox) {
          if (prevDice === 6 && dice === 6 || prevDice1 === 6 && dice1 === 6) {
            //player throws a six two times in a row, player loses entire score, show message and it's the next players turn
            document.getElementById('m6').style.display = 'block';
            document.getElementById('m1').style.display = 'none'; 
            console.info("6");
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
          }
        }
        
        prevDice = dice;
        prevDice1 = dice1;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
        //scores[activePlayer] = scores[activePlayer] + roundScore;

        // update the UI (user interface)
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        input = document.querySelector('.nw-score').value;
        var newWScore;
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if (input) {
            newWScore = input;
        }
        else {
            newWScore = 100;
        }

        // check if player won the game
        if (scores[activePlayer] >= newWScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            //next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    winningScore = 100;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.getElementById('m1').style.display = 'none';
    document.getElementById('m6').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
