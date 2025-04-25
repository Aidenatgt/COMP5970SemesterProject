let running = false;
let angle = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("play-btn").addEventListener("click", play);
async function play() {
  if (document.getElementById("pause-btn").classList.contains("d-none")) {
    document.getElementById("play-btn").classList.add("d-none");
    document.getElementById("pause-btn").classList.remove("d-none");
    if (!running) {
      running = true;
      await runMotor();
    }
  }
}

document.getElementById("pause-btn").addEventListener("click", pause);
async function pause() {
  if (document.getElementById("play-btn").classList.contains("d-none")) {
    document.getElementById("pause-btn").classList.add("d-none");
    document.getElementById("play-btn").classList.remove("d-none");
    running = false;
  }
}

document.getElementById("reset-btn").addEventListener("click", reset);
async function reset() {
  console.log("resetting");
  angle = 0;
  updatePosition();
}

async function updatePosition() {
  document.getElementById("pos").innerHTML = angle
  document.getElementById("motor-wheel").style.transform = `rotate(${angle}deg)`;
}

async function runMotor() {
  while (running) {
    angle += 1;
    updatePosition();
    await sleep(1);
  }

  return;
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("starting");
  play();
});
