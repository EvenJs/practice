const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const newYear = '1 Jan 2022';

const caltulateTime = () => {
  const currentDate = new Date();
  const date = new Date(newYear);
  const dateDiff = (date - currentDate)/1000;

  const dayLeft =  parseInt(dateDiff / 24 / 60 / 60);
  const hourLeft = parseInt((dateDiff / 3600) % 24);
  const minLeft = parseInt((dateDiff / 60) % 60);
  const secLeft = parseInt(dateDiff % 60);

  days.innerHTML = dayLeft;
  hours.innerHTML = hourLeft;
  minutes.innerHTML = minLeft;
  seconds.innerHTML = secLeft;
}

caltulateTime();

setInterval(caltulateTime, 1000);
