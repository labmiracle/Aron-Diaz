const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = [2000, 2004, 2008, 2004];

const hasDuplicated = (array: any) => new Set(array).size < array.length;

console.log(hasDuplicated(a));
console.log(hasDuplicated(b));

const arrays = a.concat(b);

const deleteDuplicated = new Set(arrays);

const uniques = [...deleteDuplicated];

console.log(uniques);
