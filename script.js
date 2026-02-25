const rounds = [
  {
    state: "California",
    city: "Sacramento",
    path: "M170 80 L120 120 L100 180 L120 250 L140 315 L160 410 L200 530 L240 650 L300 640 L320 580 L300 500 L320 430 L310 360 L290 250 L280 160 L230 80 Z",
    target: { x: 243, y: 280 },
  },
  {
    state: "Texas",
    city: "Austin",
    path: "M240 120 L190 230 L120 250 L110 350 L170 430 L190 520 L260 560 L360 620 L470 590 L530 530 L610 500 L620 440 L560 410 L530 350 L510 300 L410 280 L380 200 L320 200 L300 140 Z",
    target: { x: 360, y: 390 },
  },
  {
    state: "Florida",
    city: "Orlando",
    path: "M270 120 L430 110 L450 170 L410 220 L380 250 L360 300 L370 360 L430 430 L530 510 L610 580 L660 630 L640 665 L590 640 L540 600 L470 560 L410 500 L350 430 L290 360 L240 250 Z",
    target: { x: 430, y: 420 },
  },
  {
    state: "New York",
    city: "Albany",
    path: "M210 220 L290 160 L390 150 L510 180 L620 210 L700 280 L650 320 L610 380 L540 390 L520 430 L480 450 L400 420 L330 420 L280 390 L200 320 Z",
    target: { x: 490, y: 290 },
  },
  {
    state: "Illinois",
    city: "Springfield",
    path: "M340 90 L450 90 L470 170 L450 250 L470 360 L500 440 L500 550 L410 610 L330 550 L320 460 L340 380 L320 300 L330 210 Z",
    target: { x: 405, y: 415 },
  },
];

const stateOutline = document.getElementById("stateOutline");
const guessMarker = document.getElementById("guessMarker");
const targetMarker = document.getElementById("targetMarker");
const stateMap = document.getElementById("stateMap");
const roundEl = document.getElementById("round");
const stateEl = document.getElementById("stateName");
const cityEl = document.getElementById("cityName");
const totalScoreEl = document.getElementById("totalScore");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

let roundIndex = 0;
let totalScore = 0;
let guessedThisRound = false;

function drawRound() {
  const current = rounds[roundIndex];
  stateOutline.setAttribute("d", current.path);
  roundEl.textContent = `${roundIndex + 1} / ${rounds.length}`;
  stateEl.textContent = current.state;
  cityEl.textContent = current.city;
  feedbackEl.textContent = "Click inside the state to place your guess.";
  guessedThisRound = false;
  nextBtn.disabled = true;
  hideMarker(guessMarker);
  hideMarker(targetMarker);
}

function hideMarker(marker) {
  marker.setAttribute("visibility", "hidden");
}

function showMarker(marker, x, y) {
  marker.setAttribute("cx", x);
  marker.setAttribute("cy", y);
  marker.setAttribute("visibility", "visible");
}

function getSvgPoint(event) {
  const point = stateMap.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(stateMap.getScreenCTM().inverse());
}

function getRoundScore(distance, spread) {
  const normalized = Math.max(0, 1 - distance / spread);
  return Math.round(normalized * 100);
}

stateMap.addEventListener("click", (event) => {
  if (guessedThisRound) {
    return;
  }

  const current = rounds[roundIndex];
  const clickPoint = getSvgPoint(event);

  const dx = clickPoint.x - current.target.x;
  const dy = clickPoint.y - current.target.y;
  const distance = Math.hypot(dx, dy);

  const box = stateOutline.getBBox();
  const spread = Math.hypot(box.width, box.height) * 0.85;
  const roundScore = getRoundScore(distance, spread);

  totalScore += roundScore;
  totalScoreEl.textContent = totalScore;

  showMarker(guessMarker, clickPoint.x, clickPoint.y);
  showMarker(targetMarker, current.target.x, current.target.y);

  feedbackEl.textContent = `You were ${distance.toFixed(1)} px away. Round score: ${roundScore} / 100.`;

  guessedThisRound = true;
  nextBtn.disabled = false;
});

nextBtn.addEventListener("click", () => {
  if (!guessedThisRound) {
    return;
  }

  if (roundIndex === rounds.length - 1) {
    feedbackEl.textContent = `Game complete! Final score: ${totalScore} / ${rounds.length * 100}. Hit restart to play again.`;
    nextBtn.disabled = true;
    return;
  }

  roundIndex += 1;
  drawRound();
});

restartBtn.addEventListener("click", () => {
  roundIndex = 0;
  totalScore = 0;
  totalScoreEl.textContent = totalScore;
  drawRound();
});

drawRound();
