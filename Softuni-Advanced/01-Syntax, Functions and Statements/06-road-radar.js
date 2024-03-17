//
//
//

function roadRadar(speed, area) {
  const speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let speedingType = "";
  let speedDiff = speed - speedLimits[area];

  if (speedDiff <= 0) {
    return `Driving ${speed} km/h in a ${speedLimits[area]} zone`;
  } else {
    if (speedDiff <= 20) {
      speedingType = "speeding";
    } else if (speedDiff <= 40) {
      speedingType = "excessive speeding";
    } else {
      speedingType = "reckless driving";
    }
    return `The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimits[area]} - ${speedingType}`;
  }
}

console.log(roadRadar(40, "city"));
console.log(roadRadar(21, "residential"));
console.log(roadRadar(120, "interstate"));
console.log(roadRadar(200, "motorway"));
