const circleButton = document.getElementById('circle_generator');
const circleContainer = document.getElementById('container');

let circleIntervalId = null;

function createCircle() {
  const circle = document.createElement('div')
  circle.classList.add('circle')

  const size = Math.random() * 80 + 20;

  const x = Math.random() * (circleContainer.clientWidth - size);
  const y = Math.random() * (circleContainer.clientHeight - size);

  const hue = Math.floor(Math.random() * 360);
  const color = `hsl(${hue}, 70%, 50%)`;

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = color;
  circle.style.position = 'absolute';
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  circleContainer.appendChild(circle)
}

circleButton.addEventListener('click', () => {
  if (circleIntervalId === null) {
    circleIntervalId = setInterval(createCircle, 2000);
    circleButton.textContent = 'stop circles';
  } 
  else {
    clearInterval(circleIntervalId);
    circleIntervalId = null;
    circleButton.textContent = 'start circles';
  }
});