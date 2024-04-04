let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  tie: 0
}

updateScoreEl()

document.querySelector('.js-btn1')
.addEventListener('click', () => {
  rockPaperScissor('rock');
})

document.querySelector('.js-btn2')
.addEventListener('click', () => {
  rockPaperScissor('paper');
})

document.querySelector('.js-btn3')
.addEventListener('click', () => {
  rockPaperScissor('scissors');
})

document.querySelector('.js-reset')
.addEventListener('click', () => {
  score.wins = 0;
  score.loses = 0;
  score.tie = 0;
  updateScoreEl()
})


function rockPaperScissor(choice) {
  const computerMove = pickComputerMove()

  let result = '';

  if (choice === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You Lose!';
    } else if (computerMove === 'paper') {
      result = 'You Won!';
    } else if (computerMove === 'scissors') {
      result = 'Tie!';
    }
  } else if (choice === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Won!';
    } else if (computerMove === 'paper') {
      result = 'Tie!';
    } else if (computerMove === 'scissors') {
      result = 'You Lose!';
    }
  } else if (choice === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie!';
    } else if (computerMove === 'paper') {
      result = 'You Lose!';
    } else if (computerMove === 'scissors') {
      result = 'You Won!';
    }
  }

  if (result === 'Tie!') {
    score.tie += 1;
  } else if (result === 'You Lose!') {
    score.loses += 1;
  } else if (result === 'You Won!') {
    score.wins += 1;
  }

  localStorage.setItem('score', JSON.stringify(score))

  updateScoreEl()

  document.querySelector('.js-detail').innerHTML = result;

  document.querySelector('.js-result').innerHTML = `You Choose ${choice} and Computer Chooses ${computerMove}`;


};

function updateScoreEl ()  {
  document.querySelector('.js-score')
  .innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.tie}`
}

function pickComputerMove () {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber  < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors'
  }

  return computerMove;
}