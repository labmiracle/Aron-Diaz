const detect = (cadena) => {
  let text = cadena.toLowerCase().split(" ").join("");

  for (let i = 0; i < text.length; i++) {
    if (text[i + 1] === text[i]) {
      return i;
    }
  }
  return -1;
};


module.exports = { detect };