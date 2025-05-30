const container = document.getElementById('container');

const shapeButtons = {
  rectangle: document.getElementById('rectangle_generator'),
  triangle: document.getElementById('triangle_generator'),
  circle: document.getElementById('circle_generator')
};

const intervalIds = {};

function generateShapeData(shape, width, height) {
  const size = Math.random() * 80 + 20;
  const x = Math.random() * (width - size);
  const y = Math.random() * (height - size);
  const hue = Math.floor(Math.random() * 360);

  if (shape === 'rectangle') {
    return {
      type: shape,
      width: size,
      height: Math.random() * 100 + 20,
      x,
      y,
      hue
    };
  }

  return {
    type: shape,
    width: size,
    height: size,
    x,
    y,
    hue
  };
}

function createDOMShape(data) {
  let el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.left = `${data.x}px`;
  el.style.top = `${data.y}px`;

  const color = `hsl(${data.hue}, 70%, 50%)`;

  if (data.type === 'rectangle') {
    el.classList.add('rectangle');
    el.style.width = `${data.width}px`;
    el.style.height = `${data.height}px`;
    el.style.backgroundColor = color;
  } else if (data.type === 'circle') {
    el.classList.add('circle');
    el.style.width = `${data.width}px`;
    el.style.height = `${data.height}px`;
    el.style.borderRadius = '50%';
    el.style.backgroundColor = color;
  } else if (data.type === 'triangle') {
    el.style.width = '0';
    el.style.height = '0';
    el.style.borderLeft = `${data.width / 2}px solid transparent`;
    el.style.borderRight = `${data.width / 2}px solid transparent`;
    el.style.borderBottom = `${data.height}px solid ${color}`;
  }

  container.appendChild(el);
}

function toggleShape(shape) {
  if (intervalIds[shape]) {
    clearInterval(intervalIds[shape]);
    intervalIds[shape] = null;
    shapeButtons[shape].textContent = `start ${shape}s`;
  } else {
    intervalIds[shape] = setInterval(() => {
      const shapeData = generateShapeData(shape, container.clientWidth, container.clientHeight);
      createDOMShape(shapeData);
    }, 2000);
    shapeButtons[shape].textContent = `stop ${shape}s`;
  }
}

Object.keys(shapeButtons).forEach(shape => {
  shapeButtons[shape].addEventListener('click', () => toggleShape(shape));
});
