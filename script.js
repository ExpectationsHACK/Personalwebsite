const currentTimeElement = document.getElementById('currentTime');
const currentDayElement = document.getElementById('currentDay');

function updateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });
  const formattedDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  currentTimeElement.textContent = formattedTime;
  currentDayElement.textContent = formattedDay;
}

updateTime();
setInterval(updateTime, 1000); // Update time every second
