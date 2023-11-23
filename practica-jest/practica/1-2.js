/*
"""Cómo saber si un año va a ser bisiesto?
Los años bisiestos son los divisibles entre 4 (como 2004, 2008, etc.)
excepto si es divisible entre 100, entonces no es bisiesto (como 2100, 2200, etc.)
excepto si es divisible entre 400, entonces sí (como 2000, 2400)""""
*/

const leapYear = (year) => {
  if ((year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0) {
    return true;
  }
};

module.exports = { leapYear };
