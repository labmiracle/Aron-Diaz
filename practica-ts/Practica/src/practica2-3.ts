//2.3
const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10]

function flatten(array: (number | number[])[]) {
    const flattened = []

    for (const element of array) {
        if (Array.isArray(element)) {
            element // any[]
            flattened.push(...element)
        } else {
            element // any
            flattened.push(element)
        }
    }

    return flattened
}
const flattenedNumbers = flatten(numbers)

console.log('[Ejercicio 2.3]', flattenedNumbers)


//3 Bonificación: convertir ‘flatten‘ en una función genérica
const numbers1: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10]

function flattenGenerics<T>(array: (T | T[])[]) {
    const flattened = []

    for (const element of array) {
        if (Array.isArray(element)) {
            element // any[]
            flattened.push(...element)
        } else {
            element // any
            flattened.push(element)
        }
    }

    return flattened
}
const flattenedNumbersGenerics = flattenGenerics(numbers)

console.log('[Ejercicio 2.3 Bonificacion]', flattenedNumbersGenerics)


const stringG:(string | string [])[]= ["Hola", ["Mundo"]];
const flattenedString1 = flattenGenerics(stringG);
console.log("Flattened numbers1:", flattenedString1);

const booleanG:(boolean | boolean[])[] = [true, false, [false]] 
const flattenedBoolean = flattenGenerics(booleanG);
console.log("Flattened boolean:", flattenedBoolean)
