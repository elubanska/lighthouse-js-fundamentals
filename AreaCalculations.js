function calculateRectangleArea(length, width){
    if (length <= 0 || width <= 0){
      return undefined;
    } else {
      const RecArea = length * width;
      return RecArea;
    }
  }
  function calculateTriangleArea(base, height){
    if (base <= 0 || height <= 0){
      return undefined;
    } else {
      const TriArea = (base * height) / 2;
      return TriArea;
    }
  }
  function calculateCircleArea(radius){
    if (radius <= 0){
      return undefined;
    } else {
      const CircArea = (Math.PI * (radius * radius));
      return CircArea;
    }
  }
  console.log(calculateRectangleArea(-1, 0)); 
  console.log(calculateRectangleArea(10, 5));     // should print 50
  console.log(calculateTriangleArea(-1, 0));  // should print 3.75
  console.log(calculateRectangleArea(10, -5));    // should print undefined
  console.log(calculateCircleArea(10));
