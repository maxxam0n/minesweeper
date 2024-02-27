export function getCoords(e, size) {
  const coordX = e.target.attrs.x;
  const coordY = e.target.attrs.y;
  const x = Math.floor(coordX / size);
  const y = Math.floor(coordY / size);

  return [y, x];
}
