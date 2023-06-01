//1.1
const { fizzBuzz } = require("../1-1.js");

describe("Validaciones fizzbuzz", () => {
  test("Divisible por 3 y por 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
  test("Divisible por 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  test("Divisible por 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(25)).toBe("Buzz");
  });
  test("0", () => {
    expect(fizzBuzz(0)).toBe(0);
  });
  test("String", () => {
    expect(fizzBuzz("5")).toBe("Buzz");
    expect(fizzBuzz("Jest")).toBe("Jest");
  });
});

//1.2
const { leapYear } = require("../1-2.js");

describe("Validaciones año bisiesto", () => {
  test("Año bisiesto", () => {
    expect(leapYear(2004)).toBeTruthy();
    expect(leapYear(2012)).toBeTruthy();
    expect(leapYear(1908)).toBeTruthy();
  });
  test("Año no bisiesto", () => {
    expect(leapYear(2100)).toBeFalsy();
    expect(leapYear(2011)).toBeFalsy();
  });
});

//1.3
const { adn } = require("../1-3.js");

describe("Validaciones ADN", () => {
  test("", () => {
    expect(adn("")).toBe("");
    expect(adn("CTAGGGA")).toBe("CTAG");
  });
});

//1.4
const { sumPositives } = require("../1-4.js");

describe("Validaciones de suma", () => {
  test("suma", () => {
    expect(sumPositives([1, 2, 3])).toBe(6);
    expect(sumPositives([4, 3])).toBe(7);
    expect(sumPositives(["1", 2, "3"])).toBe(6);
    expect(sumPositives([5, "5", "Hola"])).toBe(10);
  });
});

//1.5
const { detect } = require("../1-5.js");

describe("Validaciones de cadena", () => {
  test("Caracter repetido", () => {
    expect(detect("Hola aprendiendo JEST")).toBe(3);
    expect(detect("Hello, I'm Aron")).toBe(2);
    expect(detect("ABCDEFGg")).toBe(6);
    expect(detect("S ss")).toBe(0);
    expect(detect("Jest")).toBe(-1);
  });
});

//1.6
const { arr } = require("../1-6.js");

describe("Validaciones 1 y 0", () => {
  test("Repicition del caracter 1", () => {
    expect(arr("1011100110")).toBe(3);
    expect(arr("10000001")).toBe(1);
    expect(arr("110000002")).toBe(-1);
  });
});

//1.7
// Tests
const { lookup } = require("../1-7.js");

describe("lookup()", () => {
  it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const actual = lookup("norvig", "likes");
    const expected = ["AI", "Search", "NASA", "Mars"];

    expect(actual).toEqual(expected);
  });

  it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
    const actual = lookup("knuth", "lastName");
    const expected = "Knuth";

    expect(actual).toEqual(expected);
  });

  it("with unknown user should throw an error with the correct message", () => {
    expect(() => {
      lookup("nobody", "likes");
    }).toThrow(/Could not find user/);
  });

  it("with unknown property should throw an error the correct message", () => {
    expect(() => {
      lookup("mfowler", "noprop");
    }).toThrow(/Could not find property/);
  });
});

//1.8


describe("setPrice()", () => {
  it("should set the price in the given item object, immutably.", () => {
    const item = {
      name: "test",
      price: 30,
    };
    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
      name: "test",
      price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).toEqual(copy);
  });
});
