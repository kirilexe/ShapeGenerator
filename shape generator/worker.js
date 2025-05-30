function generateShapeData(type, containerWidth, containerHeight) {
  const size = Math.random() * 80 + 20;
  const width = type === 'rectangle' ? Math.random() * 100 + 20 : size;
  const height = type === 'rectangle' ? Math.random() * 100 + 20 : size;

  const x = Math.random() * (containerWidth - width);
  const y = Math.random() * (containerHeight - height);
  const hue = Math.floor(Math.random() * 360);

  return { type, x, y, width, height, hue };
}

self.onmessage = function(e) {
  const { shape, width, height } = e.data;
  const shapeData = generateShapeData(shape, width, height);
  self.postMessage(shapeData);
};
