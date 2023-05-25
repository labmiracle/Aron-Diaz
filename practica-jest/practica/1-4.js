function sumPositives(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let value = Number(arr[i]);
    if (value > 0) {
      sum += value;
    }
  }
  return sum;
}

module.exports = { sumPositives };
