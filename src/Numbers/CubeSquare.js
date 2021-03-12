// Question: Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

const cubeSquare = (side) => {
  const squareArea = side * side;
  const squarePerimeter = 4 * side;
  const cubeSurfaceArea = 6 * side * side;
  const cubeVolume = side * side * side;

  return `Area of Square... ${squareArea}\nPremiter of square... ${squarePerimeter}\nSurface area of cube... ${cubeSurfaceArea}\nVolume of Cube... ${cubeVolume}`;
};

// console.log(cubeSquare(3));
