const button = document.getElementById('rectangle_generator');
const container = document.getElementById('container');

let intervalId = null;

function createRectangle() {
  const rect = document.createElement('div');
  rect.classList.add('rectangle');

  const width = Math.random() * 100 + 20;
  const height = Math.random() * 100 + 20;
  const x = Math.random() * (container.clientWidth - width);
  const y = Math.random() * (container.clientHeight - height);

  rect.style.width = width + 'px';
  rect.style.height = height + 'px';
  rect.style.left = x + 'px';
  rect.style.top = y + 'px';

  container.appendChild(rect);
}

button.addEventListener('click', () => {
  if (intervalId === null) {
    intervalId = setInterval(createRectangle, 2000);
    button.textContent = 'stop rectangles';
  } 
  else {
    clearInterval(intervalId);
    intervalId = null;
    button.textContent = 'start rectangles';
  }
});
