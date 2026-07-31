const noBtn = document.getElementById('noBtn');
const hintText = document.getElementById('hintText');
const music = document.getElementById('bgMusic');

const hints = [
  "psst — try clicking 'No'",
  "come on, you know the answer.",
  "not an option today, sorry 😜",
  "that button's just for decoration.",
  "nice try — say yes! ❤️"
];

let hintIndex = 0;

function dodgeNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  hintIndex = (hintIndex + 1) % hints.length;
  hintText.innerText = hints[hintIndex];
}

noBtn.addEventListener('mouseover', dodgeNoButton);
noBtn.addEventListener('touchstart', dodgeNoButton);

function nextScreen() {
  // Screen change karega
  document.getElementById('card1').classList.add('hidden');
  document.getElementById('card2').classList.remove('hidden');
  
  // Background mein song play karega
  music.play().catch(error => {
    console.log("Audio play allowed on interaction.");
  });
}

function finish() {
  alert("Proposal Accepted! ❤️");
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  document.getElementById('hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);
