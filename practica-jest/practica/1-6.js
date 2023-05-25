function arr(number) {
  let binaries = number.split("");

  if (!binaries.every((e) => e == "0" || e == "1")) {
    return -1;
  }

  let result = number.split("0").map(function (i) {
    return i.length;
  });
  return Math.max(...result);
}

module.exports = { arr };
