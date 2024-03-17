//
//
//

function timeToWalk(steps, footprintLength, speed) {

  let distance = steps * footprintLength;
  
  let breaks = Math.floor(distance / 500);

  let timeInHours = distance / (speed * 1000);

  let timeInMinutes = timeInHours * 60;

  let timeInSeconds = timeInMinutes * 60;

  timeInSeconds += breaks * 60;

  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = Math.ceil(timeInSeconds % 60);


  let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return formattedTime;
}

console.log(timeToWalk(4000, 0.60, 5));
console.log(timeToWalk(2564, 0.70, 5.5));


