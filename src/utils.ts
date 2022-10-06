const normalizePolygon = (s: string, maxSize = 10) => {
  const points = s.slice(8, -1);
  const pointsArr = points.split(',');
  const pointsLength = pointsArr.length;
  let newPoints = '';
  if (pointsLength < maxSize) {
    newPoints =
      points +
      `, ${pointsArr[pointsLength - 1]}`.repeat(maxSize - pointsLength);
  }
  return `polygon(${newPoints})`;
};

// eslint-disable-next-line import/prefer-default-export
export { normalizePolygon };
