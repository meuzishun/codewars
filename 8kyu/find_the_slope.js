function slope(points) {
  const rise = points[1] - points[3];
  const run = points[0] - points[2];

  return run === 0 ? 'undefined' : String(rise / run);
}
