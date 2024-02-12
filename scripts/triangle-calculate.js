function calculateFunction() {
  const basevalue1 = document.getElementById("tri-base");
  const valueB = basevalue1.value;
  const base = parseFloat(valueB);
  console.log(base);
  //triangle height
  const basevalue2 = document.getElementById("tri-height");
  const valueH = basevalue2.value;
  const base2 = parseFloat(valueH);
  console.log(base2);
  const result1 = 0.5 * base * base2;
  console.log("area of triangleis:", result1);
}

//calculate rectangle
function calculateRectangleFunction() {
  const basevalue3 = document.getElementById("rec-base");
  const valueW = basevalue3.value;
  const base3 = parseFloat(valueW);
  console.log(base3);
  //triangle lenght
  const basevalue4 = document.getElementById("rec-length");
  const valueL = basevalue4.value;
  const base4 = parseFloat(valueL);
  console.log(base4);
  const result2 = base3 * base4;
  console.log("area of rectangle is:", result2);
}
