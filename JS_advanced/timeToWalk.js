function timeToWalk(numOfSteps, stepInMeters, speed) {
  let distanceInMeters = numOfSteps * stepInMeters;
  let speedInMetersInSec = speed / 3.6;
  let time = distanceInMeters / speedInMetersInSec;
  let rest = Math.floor(distanceInMeters / 500);

  let timeInMin = Math.floor(time / 60);
  
  let timeInSec = (time - timeInMin * 60).toFixed(0);
  let timeInH = Math.floor(time / 3600);
  timeInMin += rest;
  timeInH += Math.floor(timeInMin /60);
  timeInMin = timeInMin % 60;


  let formatedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
  let formatedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
  let formatedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

  console.log(`${formatedH}:${formatedM}:${formatedS}`);
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
