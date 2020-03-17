exports.min = function min (array) {    // функция применяется к массивам
  if (array === undefined || array.length === 0) { 
  return 0;
  }
  let min = array[0];
  for (let i = 1; i < array.length; i++) { 
  if (min > array[i]) {
  min = array[i];
  }
  }
  return min; // он сравнивает все значения и возвращает самое маленькое
  };
  
exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
  return 0;
  }
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
  if (max < array[i]) {
  max = array[i];
  }
  }
  return max;
  };
  
exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
  return 0;
  }
  let sum = 0;
  array.forEach(item => sum += item);
  return sum / array.length;
  };