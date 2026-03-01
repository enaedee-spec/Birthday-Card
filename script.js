// Switch between pages
function showPage(pageId) {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
  if (pageId === 'game-page') {
    startGame();
  }
  if (pageId === 'pin-page') {
    document.getElementById('pin-input').value = '';
    document.getElementById('pin-status').textContent = '';
  }
}

// ----- PIN Page Logic -----
document.addEventListener('DOMContentLoaded', () => {
  // Setup PIN buttons
  let pinArea = document.querySelector('.pin-buttons');
  for(let i=1; i<=9; i++){
    pinArea.innerHTML += `<button onclick="addPin('${i}')">${i}</button>`;
  }
  pinArea.innerHTML += `<button onclick="addPin('0')">0</button>`;
  // Set page to PIN on load
  showPage('pin-page');

  // Setup game area
  document.getElementById('gameArea').style.position = 'relative';
  document.getElementById('gameArea').style.height = '220px';
});

function addPin(num) {
  let pinInput = document.getElementById('pin-input');
  if(pinInput.value.length < 4){
    pinInput.value += num;
  }
}

function submitPin() {
  let pin = document.getElementById('pin-input').value;
  let pinStatus = document.getElementById('pin-status');
  if(pin === "1234"){ // <-- set your custom PIN here
    pinStatus.textContent = "Access granted! 🎉";
    setTimeout(() => showPage('game-page'), 1000); // Move to next page after a short delay
  } else {
    pinStatus.textContent = "Wrong PIN, try again!";
  }
}

// ----- Catch Mini Heart Game -----
let score = 0;
function startGame() {
  score = 0;
  updateScore();
  document.getElementById('gameArea').innerHTML = '';
  spawnHeart();
}

function updateScore() {
  document.getElementById('score').textContent = `${score} / 5`;
  if(score >= 5){
    document.getElementById('game-next-btn').style.display = 'inline-block';
  } else {
    document.getElementById('game-next-btn').style.display = 'none';
  }
}

function spawnHeart() {
  if (score >= 5) return;
  const heart = document.createElement('span');
  heart.textContent = '💗';
  heart.style.position = 'absolute';
  heart.style.left = Math.random()*220+30 + 'px';
  heart.style.top = Math.random()*120+30 + 'px';
  heart.style.fontSize = '2em';
  heart.style.cursor = 'pointer';

  heart.onclick = () => {
    score += 1;
    updateScore();
    heart.remove();
    if(score < 5) spawnHeart();
  };
  document.getElementById('gameArea').appendChild(heart);
}