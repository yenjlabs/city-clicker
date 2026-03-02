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

const LARGEST_CITIES_BY_STATE = {
  Alabama: [
    { city: "Huntsville", lat: 34.7304, lon: -86.5861 },
    { city: "Birmingham", lat: 33.5186, lon: -86.8104 },
  ],
  Alaska: [
    { city: "Anchorage", lat: 61.2176, lon: -149.8997 },
    { city: "Fairbanks", lat: 64.8378, lon: -147.7164 },
  ],
  Arizona: [
    { city: "Tucson", lat: 32.2226, lon: -110.9747 },
    { city: "Mesa", lat: 33.4152, lon: -111.8315 },
  ],
  Arkansas: [
    { city: "Fayetteville", lat: 36.0822, lon: -94.1719 },
    { city: "Fort Smith", lat: 35.3859, lon: -94.3985 },
  ],
  California: [
    { city: "Los Angeles", lat: 34.0522, lon: -118.2437 },
    { city: "San Diego", lat: 32.7157, lon: -117.1611 },
  ],
  Colorado: [
    { city: "Colorado Springs", lat: 38.8339, lon: -104.8214 },
    { city: "Aurora", lat: 39.7294, lon: -104.8319 },
  ],
  Connecticut: [
    { city: "Bridgeport", lat: 41.1792, lon: -73.1894 },
    { city: "Stamford", lat: 41.0534, lon: -73.5387 },
  ],
  Delaware: [
    { city: "Wilmington", lat: 39.7391, lon: -75.5398 },
    { city: "Newark", lat: 39.6837, lon: -75.7497 },
  ],
  Florida: [
    { city: "Jacksonville", lat: 30.3322, lon: -81.6557 },
    { city: "Miami", lat: 25.7617, lon: -80.1918 },
  ],
  Georgia: [
    { city: "Columbus", lat: 32.4609, lon: -84.9877 },
    { city: "Augusta", lat: 33.4735, lon: -82.0105 },
  ],
  Hawaii: [
    { city: "East Honolulu", lat: 21.2766, lon: -157.7065 },
    { city: "Pearl City", lat: 21.3972, lon: -157.9756 },
  ],
  Idaho: [
    { city: "Meridian", lat: 43.6121, lon: -116.3915 },
    { city: "Nampa", lat: 43.5407, lon: -116.5635 },
  ],
  Illinois: [
    { city: "Chicago", lat: 41.8781, lon: -87.6298 },
    { city: "Aurora", lat: 41.7606, lon: -88.3201 },
  ],
  Indiana: [
    { city: "Fort Wayne", lat: 41.0793, lon: -85.1394 },
    { city: "Evansville", lat: 37.9716, lon: -87.5711 },
  ],
  Iowa: [
    { city: "Cedar Rapids", lat: 41.9779, lon: -91.6656 },
    { city: "Davenport", lat: 41.5236, lon: -90.5776 },
  ],
  Kansas: [
    { city: "Wichita", lat: 37.6872, lon: -97.3301 },
    { city: "Overland Park", lat: 38.9822, lon: -94.6708 },
  ],
  Kentucky: [
    { city: "Louisville", lat: 38.2527, lon: -85.7585 },
    { city: "Lexington", lat: 38.0406, lon: -84.5037 },
  ],
  Louisiana: [
    { city: "New Orleans", lat: 29.9511, lon: -90.0715 },
    { city: "Shreveport", lat: 32.5252, lon: -93.7502 },
  ],
  Maine: [
    { city: "Portland", lat: 43.6591, lon: -70.2568 },
    { city: "Lewiston", lat: 44.1004, lon: -70.2148 },
  ],
  Maryland: [
    { city: "Baltimore", lat: 39.2904, lon: -76.6122 },
    { city: "Frederick", lat: 39.4143, lon: -77.4105 },
  ],
  Massachusetts: [
    { city: "Worcester", lat: 42.2626, lon: -71.8023 },
    { city: "Springfield", lat: 42.1015, lon: -72.5898 },
  ],
  Michigan: [
    { city: "Detroit", lat: 42.3314, lon: -83.0458 },
    { city: "Grand Rapids", lat: 42.9634, lon: -85.6681 },
  ],
  Minnesota: [
    { city: "Minneapolis", lat: 44.9778, lon: -93.265 },
    { city: "Rochester", lat: 44.0121, lon: -92.4802 },
  ],
  Mississippi: [
    { city: "Gulfport", lat: 30.3674, lon: -89.0928 },
    { city: "Southaven", lat: 34.9889, lon: -90.0126 },
  ],
  Missouri: [
    { city: "Kansas City", lat: 39.0997, lon: -94.5786 },
    { city: "St. Louis", lat: 38.627, lon: -90.1994 },
  ],
  Montana: [
    { city: "Billings", lat: 45.7833, lon: -108.5007 },
    { city: "Missoula", lat: 46.8721, lon: -113.994 },
  ],
  Nebraska: [
    { city: "Omaha", lat: 41.2565, lon: -95.9345 },
    { city: "Bellevue", lat: 41.1544, lon: -95.9146 },
  ],
  Nevada: [
    { city: "Las Vegas", lat: 36.1699, lon: -115.1398 },
    { city: "Henderson", lat: 36.0395, lon: -114.9817 },
  ],
  "New Hampshire": [
    { city: "Manchester", lat: 42.9956, lon: -71.4548 },
    { city: "Nashua", lat: 42.7654, lon: -71.4676 },
  ],
  "New Jersey": [
    { city: "Newark", lat: 40.7357, lon: -74.1724 },
    { city: "Jersey City", lat: 40.7178, lon: -74.0431 },
  ],
  "New Mexico": [
    { city: "Albuquerque", lat: 35.0844, lon: -106.6504 },
    { city: "Las Cruces", lat: 32.3199, lon: -106.7637 },
  ],
  "New York": [
    { city: "New York", lat: 40.7128, lon: -74.006 },
    { city: "Buffalo", lat: 42.8864, lon: -78.8784 },
  ],
  "North Carolina": [
    { city: "Charlotte", lat: 35.2271, lon: -80.8431 },
    { city: "Greensboro", lat: 36.0726, lon: -79.792 },
  ],
  "North Dakota": [
    { city: "Fargo", lat: 46.8772, lon: -96.7898 },
    { city: "Grand Forks", lat: 47.9253, lon: -97.0329 },
  ],
  Ohio: [
    { city: "Cleveland", lat: 41.4993, lon: -81.6944 },
    { city: "Cincinnati", lat: 39.1031, lon: -84.512 },
  ],
  Oklahoma: [
    { city: "Tulsa", lat: 36.154, lon: -95.9928 },
    { city: "Norman", lat: 35.2226, lon: -97.4395 },
  ],
  Oregon: [
    { city: "Portland", lat: 45.5152, lon: -122.6784 },
    { city: "Eugene", lat: 44.0521, lon: -123.0868 },
  ],
  Pennsylvania: [
    { city: "Philadelphia", lat: 39.9526, lon: -75.1652 },
    { city: "Pittsburgh", lat: 40.4406, lon: -79.9959 },
  ],
  "Rhode Island": [
    { city: "Warwick", lat: 41.7001, lon: -71.4162 },
    { city: "Cranston", lat: 41.7798, lon: -71.4373 },
  ],
  "South Carolina": [
    { city: "Charleston", lat: 32.7765, lon: -79.9311 },
    { city: "North Charleston", lat: 32.8546, lon: -79.9748 },
  ],
  "South Dakota": [
    { city: "Sioux Falls", lat: 43.546, lon: -96.7313 },
    { city: "Rapid City", lat: 44.0805, lon: -103.231 },
  ],
  Tennessee: [
    { city: "Memphis", lat: 35.1495, lon: -90.049 },
    { city: "Knoxville", lat: 35.9606, lon: -83.9207 },
  ],
  Texas: [
    { city: "Houston", lat: 29.7604, lon: -95.3698 },
    { city: "San Antonio", lat: 29.4241, lon: -98.4936 },
  ],
  Utah: [
    { city: "West Valley City", lat: 40.6916, lon: -112.0011 },
    { city: "West Jordan", lat: 40.6097, lon: -111.9391 },
  ],
  Vermont: [
    { city: "Burlington", lat: 44.4759, lon: -73.2121 },
    { city: "South Burlington", lat: 44.4669, lon: -73.1709 },
  ],
  Virginia: [
    { city: "Virginia Beach", lat: 36.8529, lon: -75.978 },
    { city: "Chesapeake", lat: 36.7682, lon: -76.2875 },
  ],
  Washington: [
    { city: "Seattle", lat: 47.6062, lon: -122.3321 },
    { city: "Spokane", lat: 47.6588, lon: -117.426 },
  ],
  "West Virginia": [
    { city: "Huntington", lat: 38.4192, lon: -82.4452 },
    { city: "Morgantown", lat: 39.6295, lon: -79.9559 },
  ],
  Wisconsin: [
    { city: "Milwaukee", lat: 43.0389, lon: -87.9065 },
    { city: "Green Bay", lat: 44.5133, lon: -88.0133 },
  ],
  Wyoming: [
    { city: "Casper", lat: 42.8666, lon: -106.3131 },
    { city: "Gillette", lat: 44.2911, lon: -105.5022 },
  ],
};

const ALLOWED_STATE_COUNTS = [5, 10, 25, 50];

const stateOutline = document.getElementById("stateOutline");
const guessMarker = document.getElementById("guessMarker");
const targetMarker = document.getElementById("targetMarker");
const stateMap = document.getElementById("stateMap");
const roundEl = document.getElementById("round");
const locationEl = document.getElementById("location");
const totalScoreEl = document.getElementById("totalScore");
const averageScoreEl = document.getElementById("averageScore");
const feedbackEl = document.getElementById("feedback");
const restartBtn = document.getElementById("restartBtn");
const gameLengthPicker = document.getElementById("gameLengthPicker");
const gameLengthButtons = Array.from(document.querySelectorAll(".length-btn"));

const SVG_SIZE = { width: 1000, height: 700 };
const FIT_EXTENT = [
  [70, 70],
  [SVG_SIZE.width - 70, SVG_SIZE.height - 70],
];

let allStateRounds = [];
let selectedStateRounds = [];
let stateIndex = 0;
let cityIndex = 0;
let totalScore = 0;
let totalGuesses = 0;
let guessedThisRound = false;
let projection = null;
let pathGenerator = null;
let currentStateRound = null;
let currentRound = null;
let gameStarted = false;

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

function formatScore(value) {
  return Math.round(value).toLocaleString("en-US");
}

function computeStateRadiusMiles(feature) {
  const [[minLon, minLat], [maxLon, maxLat]] = d3.geoBounds(feature);
  const centerLat = (minLat + maxLat) / 2;
  const centerLon = (minLon + maxLon) / 2;
  const corners = [
    [minLat, minLon],
    [minLat, maxLon],
    [maxLat, minLon],
    [maxLat, maxLon],
  ];

  const radiusMiles = Math.max(
    ...corners.map(([lat, lon]) => haversineMiles(centerLat, centerLon, lat, lon)),
  );

  return Math.max(radiusMiles, 1);
}

function getRoundScore(distanceMiles, stateRadiusMiles) {
  if (distanceMiles <= 10) {
    return 100;
  }

  const normalized = Math.max(0, 1 - (2 * distanceMiles / stateRadiusMiles) ** 2);
  return Math.round(100 * normalized);
}

function getSvgPoint(event) {
  const point = stateMap.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(stateMap.getScreenCTM().inverse());
}

function updateScoreboard() {
  totalScoreEl.textContent = formatScore(totalScore);
  const average = totalGuesses === 0 ? 0 : totalScore / totalGuesses;
  averageScoreEl.textContent = formatScore(average);
}

function getOverallRoundIndex() {
  return stateIndex * 3 + cityIndex;
}

function getTotalRounds() {
  return selectedStateRounds.length * 3;
}

function drawRound() {
  currentStateRound = selectedStateRounds[stateIndex];
  currentRound = currentStateRound.cities[cityIndex];
  projection = d3.geoAlbers().fitExtent(FIT_EXTENT, currentStateRound.feature);
  pathGenerator = d3.geoPath(projection);

  stateOutline.setAttribute("d", pathGenerator(currentStateRound.feature));
  roundEl.textContent = `${getOverallRoundIndex() + 1} / ${getTotalRounds()}`;
  locationEl.textContent = `${currentRound.city}, ${currentStateRound.state}`;
  feedbackEl.textContent = "Click inside the state outline to place your guess.";

  guessedThisRound = false;
  restartBtn.disabled = false;
  hideMarker(guessMarker);
  hideMarker(targetMarker);
}

function endGame() {
  feedbackEl.textContent = `Game complete! Final total score: ${formatScore(totalScore)} / ${formatScore(
    getTotalRounds() * 100,
  )}. Final average: ${averageScoreEl.textContent}. Press restart to play again.`;
  guessedThisRound = true;
}

function advanceRound() {
  const isLastCityInState = cityIndex === 2;
  const isLastState = stateIndex >= selectedStateRounds.length - 1;

  if (isLastCityInState && isLastState) {
    endGame();
    return;
  }

  if (isLastCityInState) {
    stateIndex += 1;
    cityIndex = 0;
  } else {
    cityIndex += 1;
  }

  drawRound();
}

function startNewGameFromSelection(selectedStateCount) {
  selectedStateRounds = shuffle(allStateRounds).slice(0, selectedStateCount);

  stateIndex = 0;
  cityIndex = 0;
  totalScore = 0;
  totalGuesses = 0;
  gameStarted = true;
  gameLengthPicker.hidden = true;
  updateScoreboard();
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

    allStateRounds = features
      .map((feature) => {
        const fips = String(feature.id).padStart(2, "0");
        const stateName = STATE_FIPS_TO_NAME[fips];
        const capital = stateName ? CAPITALS_BY_STATE[stateName] : null;
        const largestCities = stateName ? LARGEST_CITIES_BY_STATE[stateName] : null;

        if (!stateName || !capital || !largestCities || largestCities.length < 2) {
          return null;
        }

        const cities = [capital, ...largestCities]
          .filter((city, index, list) => list.findIndex((candidate) => candidate.city === city.city) === index)
          .slice(0, 3)
          .map((city) => ({
            city: city.city,
            target: { lat: city.lat, lon: city.lon },
          }));

        if (cities.length < 3) {
          return null;
        }

        return {
          state: stateName,
          feature,
          stateRadiusMiles: computeStateRadiusMiles(feature),
          cities,
        };
      })
      .filter(Boolean);

    if (allStateRounds.length !== 50) {
      throw new Error(`Expected 50 states but loaded ${allStateRounds.length}`);
    }

    gameLengthPicker.hidden = false;
    feedbackEl.textContent = "Choose a game length to begin.";
    restartBtn.disabled = true;
  } catch (error) {
    feedbackEl.textContent = `Unable to load game data: ${error.message}`;
    locationEl.textContent = "Unavailable";
    roundEl.textContent = "-";
    restartBtn.disabled = true;
    gameLengthPicker.hidden = true;
  }
}

stateMap.addEventListener("click", (event) => {
  if (!gameStarted || !currentRound || !projection) {
    return;
  }

  if (guessedThisRound) {
    advanceRound();
    return;
  }

  const clickPoint = getSvgPoint(event);
  const guessedLonLat = projection.invert([clickPoint.x, clickPoint.y]);

  if (!guessedLonLat) {
    feedbackEl.textContent = "Please click inside the state outline.";
    return;
  }

  const [guessLon, guessLat] = guessedLonLat;

  if (!d3.geoContains(currentStateRound.feature, [guessLon, guessLat])) {
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
  const roundScore = getRoundScore(distanceMiles, currentStateRound.stateRadiusMiles);

  totalScore += roundScore;
  totalGuesses += 1;
  updateScoreboard();

  showMarker(guessMarker, clickPoint.x, clickPoint.y);
  showMarker(targetMarker, targetPoint[0], targetPoint[1]);

  const isNextState = cityIndex === 2;
  feedbackEl.textContent = `You were ${formatScore(distanceMiles)} miles away. Round score: ${formatScore(roundScore)} / 100. Click for next ${
    isNextState ? "state" : "city"
  }.`;

  guessedThisRound = true;
});

gameLengthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (allStateRounds.length === 0) {
      return;
    }

    const selected = Number.parseInt(button.dataset.states || "", 10);
    if (!ALLOWED_STATE_COUNTS.includes(selected)) {
      return;
    }

    startNewGameFromSelection(selected);
  });
});

restartBtn.addEventListener("click", () => {
  if (allStateRounds.length === 0) {
    return;
  }

  gameStarted = false;
  gameLengthPicker.hidden = false;
  feedbackEl.textContent = "Choose a game length to begin.";
  hideMarker(guessMarker);
  hideMarker(targetMarker);
});

initializeGame();
