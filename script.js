const STATES_TOPOJSON_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const STATE_FIPS_TO_NAME = {
  "01": "Alabama",
  "02": "Alaska",
  "04": "Arizona",
  "05": "Arkansas",
  "06": "California",
  "08": "Colorado",
  "09": "Connecticut",
  "10": "Delaware",
  "12": "Florida",
  "13": "Georgia",
  "15": "Hawaii",
  "16": "Idaho",
  "17": "Illinois",
  "18": "Indiana",
  "19": "Iowa",
  "20": "Kansas",
  "21": "Kentucky",
  "22": "Louisiana",
  "23": "Maine",
  "24": "Maryland",
  "25": "Massachusetts",
  "26": "Michigan",
  "27": "Minnesota",
  "28": "Mississippi",
  "29": "Missouri",
  "30": "Montana",
  "31": "Nebraska",
  "32": "Nevada",
  "33": "New Hampshire",
  "34": "New Jersey",
  "35": "New Mexico",
  "36": "New York",
  "37": "North Carolina",
  "38": "North Dakota",
  "39": "Ohio",
  "40": "Oklahoma",
  "41": "Oregon",
  "42": "Pennsylvania",
  "44": "Rhode Island",
  "45": "South Carolina",
  "46": "South Dakota",
  "47": "Tennessee",
  "48": "Texas",
  "49": "Utah",
  "50": "Vermont",
  "51": "Virginia",
  "53": "Washington",
  "54": "West Virginia",
  "55": "Wisconsin",
  "56": "Wyoming",
};

const CAPITALS_BY_STATE = {
  Alabama: { city: "Montgomery", lat: 32.377716, lon: -86.300568 },
  Alaska: { city: "Juneau", lat: 58.301598, lon: -134.420212 },
  Arizona: { city: "Phoenix", lat: 33.448143, lon: -112.096962 },
  Arkansas: { city: "Little Rock", lat: 34.746613, lon: -92.288986 },
  California: { city: "Sacramento", lat: 38.576668, lon: -121.493629 },
  Colorado: { city: "Denver", lat: 39.739227, lon: -104.984856 },
  Connecticut: { city: "Hartford", lat: 41.764046, lon: -72.682198 },
  Delaware: { city: "Dover", lat: 39.157307, lon: -75.519722 },
  Florida: { city: "Tallahassee", lat: 30.438118, lon: -84.281296 },
  Georgia: { city: "Atlanta", lat: 33.749027, lon: -84.388229 },
  Hawaii: { city: "Honolulu", lat: 21.307442, lon: -157.857376 },
  Idaho: { city: "Boise", lat: 43.617775, lon: -116.199722 },
  Illinois: { city: "Springfield", lat: 39.798363, lon: -89.654961 },
  Indiana: { city: "Indianapolis", lat: 39.768623, lon: -86.162643 },
  Iowa: { city: "Des Moines", lat: 41.591087, lon: -93.603729 },
  Kansas: { city: "Topeka", lat: 39.048191, lon: -95.677956 },
  Kentucky: { city: "Frankfort", lat: 38.186722, lon: -84.875374 },
  Louisiana: { city: "Baton Rouge", lat: 30.457069, lon: -91.187393 },
  Maine: { city: "Augusta", lat: 44.307167, lon: -69.781693 },
  Maryland: { city: "Annapolis", lat: 38.978764, lon: -76.490936 },
  Massachusetts: { city: "Boston", lat: 42.358162, lon: -71.063698 },
  Michigan: { city: "Lansing", lat: 42.733635, lon: -84.555328 },
  Minnesota: { city: "Saint Paul", lat: 44.955097, lon: -93.102211 },
  Mississippi: { city: "Jackson", lat: 32.303848, lon: -90.182106 },
  Missouri: { city: "Jefferson City", lat: 38.579201, lon: -92.172935 },
  Montana: { city: "Helena", lat: 46.585709, lon: -112.018417 },
  Nebraska: { city: "Lincoln", lat: 40.808075, lon: -96.699654 },
  Nevada: { city: "Carson City", lat: 39.163914, lon: -119.766121 },
  "New Hampshire": { city: "Concord", lat: 43.206898, lon: -71.537994 },
  "New Jersey": { city: "Trenton", lat: 40.220596, lon: -74.769913 },
  "New Mexico": { city: "Santa Fe", lat: 35.68224, lon: -105.939728 },
  "New York": { city: "Albany", lat: 42.652843, lon: -73.757874 },
  "North Carolina": { city: "Raleigh", lat: 35.78043, lon: -78.639099 },
  "North Dakota": { city: "Bismarck", lat: 46.82085, lon: -100.783318 },
  Ohio: { city: "Columbus", lat: 39.961346, lon: -82.999069 },
  Oklahoma: { city: "Oklahoma City", lat: 35.492207, lon: -97.503342 },
  Oregon: { city: "Salem", lat: 44.938461, lon: -123.030403 },
  Pennsylvania: { city: "Harrisburg", lat: 40.264378, lon: -76.883598 },
  "Rhode Island": { city: "Providence", lat: 41.830914, lon: -71.414963 },
  "South Carolina": { city: "Columbia", lat: 34.000343, lon: -81.033211 },
  "South Dakota": { city: "Pierre", lat: 44.367031, lon: -100.346405 },
  Tennessee: { city: "Nashville", lat: 36.16581, lon: -86.784241 },
  Texas: { city: "Austin", lat: 30.27467, lon: -97.740349 },
  Utah: { city: "Salt Lake City", lat: 40.777477, lon: -111.888237 },
  Vermont: { city: "Montpelier", lat: 44.262436, lon: -72.580536 },
  Virginia: { city: "Richmond", lat: 37.538857, lon: -77.43364 },
  Washington: { city: "Olympia", lat: 47.035805, lon: -122.905014 },
  "West Virginia": { city: "Charleston", lat: 38.336246, lon: -81.612328 },
  Wisconsin: { city: "Madison", lat: 43.074684, lon: -89.384445 },
  Wyoming: { city: "Cheyenne", lat: 41.140259, lon: -104.820236 },
};

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

const SVG_SIZE = { width: 1000, height: 700 };
const FIT_EXTENT = [
  [70, 70],
  [SVG_SIZE.width - 70, SVG_SIZE.height - 70],
];

let rounds = [];
let roundIndex = 0;
let totalScore = 0;
let guessedThisRound = false;
let projection = null;
let pathGenerator = null;
let currentRound = null;

function shuffle(array) {
  const output = [...array];
  for (let i = output.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}

function hideMarker(marker) {
  marker.setAttribute("visibility", "hidden");
}

function showMarker(marker, x, y) {
  marker.setAttribute("cx", x.toFixed(2));
  marker.setAttribute("cy", y.toFixed(2));
  marker.setAttribute("visibility", "visible");
}

function haversineMiles(lat1, lon1, lat2, lon2) {
  const toRad = (degrees) => (degrees * Math.PI) / 180;
  const earthRadiusMiles = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(a));
}

function getRoundScore(distanceMiles) {
  const maxDistanceForPoints = 300;
  const normalized = Math.max(0, 1 - distanceMiles / maxDistanceForPoints);
  return Math.round(normalized * 100);
}

function getSvgPoint(event) {
  const point = stateMap.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(stateMap.getScreenCTM().inverse());
}

function drawRound() {
  currentRound = rounds[roundIndex];
  projection = d3.geoMercator().fitExtent(FIT_EXTENT, currentRound.feature);
  pathGenerator = d3.geoPath(projection);

  stateOutline.setAttribute("d", pathGenerator(currentRound.feature));
  roundEl.textContent = `${roundIndex + 1} / ${rounds.length}`;
  stateEl.textContent = currentRound.state;
  cityEl.textContent = currentRound.city;
  feedbackEl.textContent = "Click inside the state outline to place your guess.";

  guessedThisRound = false;
  nextBtn.disabled = true;
  restartBtn.disabled = false;
  hideMarker(guessMarker);
  hideMarker(targetMarker);
}

function endGame() {
  feedbackEl.textContent = `Game complete! Final score: ${totalScore} / ${rounds.length * 100}. Press restart to play again.`;
  nextBtn.disabled = true;
  guessedThisRound = true;
}

function restartGame() {
  roundIndex = 0;
  totalScore = 0;
  totalScoreEl.textContent = "0";
  rounds = shuffle(rounds);
  drawRound();
}

async function initializeGame() {
  try {
    const response = await fetch(STATES_TOPOJSON_URL);
    if (!response.ok) {
      throw new Error(`Failed to load state geometry (${response.status})`);
    }

    const topo = await response.json();
    const features = topojson.feature(topo, topo.objects.states).features;

    rounds = features
      .map((feature) => {
        const fips = String(feature.id).padStart(2, "0");
        const stateName = STATE_FIPS_TO_NAME[fips];
        const capital = stateName ? CAPITALS_BY_STATE[stateName] : null;

        if (!stateName || !capital) {
          return null;
        }

        return {
          state: stateName,
          city: capital.city,
          target: { lat: capital.lat, lon: capital.lon },
          feature,
        };
      })
      .filter(Boolean);

    if (rounds.length !== 50) {
      throw new Error(`Expected 50 states but loaded ${rounds.length}`);
    }

    rounds = shuffle(rounds);
    restartBtn.disabled = false;
    drawRound();
  } catch (error) {
    feedbackEl.textContent = `Unable to load game data: ${error.message}`;
    stateEl.textContent = "Unavailable";
    cityEl.textContent = "Unavailable";
    roundEl.textContent = "-";
    nextBtn.disabled = true;
    restartBtn.disabled = true;
  }
}

stateMap.addEventListener("click", (event) => {
  if (guessedThisRound || !currentRound || !projection) {
    return;
  }

  const clickPoint = getSvgPoint(event);
  const guessedLonLat = projection.invert([clickPoint.x, clickPoint.y]);

  if (!guessedLonLat) {
    feedbackEl.textContent = "Please click inside the state outline.";
    return;
  }

  const [guessLon, guessLat] = guessedLonLat;

  if (!d3.geoContains(currentRound.feature, [guessLon, guessLat])) {
    feedbackEl.textContent = "Please click inside the state outline.";
    return;
  }

  const targetPoint = projection([currentRound.target.lon, currentRound.target.lat]);
  const distanceMiles = haversineMiles(
    guessLat,
    guessLon,
    currentRound.target.lat,
    currentRound.target.lon,
  );
  const roundScore = getRoundScore(distanceMiles);

  totalScore += roundScore;
  totalScoreEl.textContent = String(totalScore);

  showMarker(guessMarker, clickPoint.x, clickPoint.y);
  showMarker(targetMarker, targetPoint[0], targetPoint[1]);

  feedbackEl.textContent = `You were ${distanceMiles.toFixed(1)} miles away. Round score: ${roundScore} / 100.`;

  guessedThisRound = true;
  nextBtn.disabled = false;
});

nextBtn.addEventListener("click", () => {
  if (!guessedThisRound || rounds.length === 0) {
    return;
  }

  if (roundIndex >= rounds.length - 1) {
    endGame();
    return;
  }

  roundIndex += 1;
  drawRound();
});

restartBtn.addEventListener("click", () => {
  if (rounds.length === 0) {
    return;
  }

  restartGame();
});

initializeGame();
