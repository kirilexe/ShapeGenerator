const triangleButton = document.getElementById('triangle_generator');
const triangleContainer = document.getElementById('container');

let triangleIntervalId = null;

function createTriangle() {
  const triangle = document.createElement('div');

  const size = Math.random() * 80 + 20;

  const x = Math.random() * (triangleContainer.clientWidth - size);
  const y = Math.random() * (triangleContainer.clientHeight - size);

  const hue = Math.floor(Math.random() * 360);
  const color = `hsl(${hue}, 70%, 50%)`;

  triangle.style.width = '0';
  triangle.style.height = '0';
  triangle.style.position = 'absolute';
  triangle.style.left = `${x}px`;
  triangle.style.top = `${y}px`;

  triangle.style.borderLeft = `${size / 2}px solid transparent`;
  triangle.style.borderRight = `${size / 2}px solid transparent`;
  triangle.style.borderBottom = `${size}px solid ${color}`;

  triangleContainer.appendChild(triangle);
}

triangleButton.addEventListener('click', () => {
  if (triangleIntervalId === null) {
    triangleIntervalId = setInterval(createTriangle, 2000);
    triangleButton.textContent = 'stop triangles';
  } 
  else {
    clearInterval(triangleIntervalId);
    triangleIntervalId = null;
    triangleButton.textContent = 'start triangles';
  }
});
