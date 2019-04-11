//Cai Yang
let box = document.getElementsByClassName('box-selector');
let player = document.getElementsByClassName('player');
let filled1 = [];
let filled2 = [];
let turn = 0;
let aWinner = false;
let reload = document.getElementById('gameover');

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', () => {

    if (isFilled(i)) {
      if (turn == 0) {
        box[i].classList.add('o');
        player[0].classList.remove('highlight');
        player[1].classList.add('highlight');
        filled1.push(i);
        isThereAWinner(filled1,"Player 1");
        turn = 1;
      } else {
        box[i].classList.add('x');
        player[0].classList.add('highlight');
        player[1].classList.remove('highlight');
        filled2.push(i);
        turn = 0;
        isThereAWinner(filled2,"Player 2");
      }
    } else {
      alert('Already filled');
    }

    if(filled1.length == 5 && aWinner == false){
      alert(`IT'S A TIE!!!`);
      pop();
    }

  });
}

const isFilled = (element) => {
  if (filled1.includes(element) || filled2.includes(element)) {
    return false;
  } else {
    return true;
  }
}

const isThereAWinner = (filled, player) => {
  if (filled.includes(0) && filled.includes(1) && filled.includes(2)) {
    alert(`${player} wins!!!`);
    pop();
  }
  if (filled.includes(0) && filled.includes(4) && filled.includes(8)) {
    alert(`${player} wins!!!`);
    pop();
  }
  if (filled.includes(0) && filled.includes(3) && filled.includes(6)) {
    alert(`${player} wins!!!`);
    pop();
  }
  if (filled.includes(3) && filled.includes(4) && filled.includes(5)) {
    alert(`${player} wins!!!`);
    pop();
  }
  if (filled.includes(6) && filled.includes(7) && filled.includes(8)) {
    alert(`${player} wins!!!`);
    pop();
  }
  if (filled.includes(6) && filled.includes(4) && filled.includes(2)) {
    alert(`${player} wins!!!`);
    pop();
  }
  if (filled.includes(2) && filled.includes(5) && filled.includes(8)) {
    alert(`${player} wins!!!`);
    pop();
  }
  if (filled.includes(1) && filled.includes(4) && filled.includes(7)) {
    alert(`${player} wins!!!`);
    pop();
  }
}

const pop = () => {
  reload.style.display = 'block';
  aWinner = true;
}
