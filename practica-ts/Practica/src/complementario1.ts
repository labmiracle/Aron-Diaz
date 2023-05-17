//1
function myFunction(joyas:string, piedras:string): number {
    let counter = 0;
    for(let i = 0; i < piedras.length; i++){
        if(joyas.includes(piedras[i]))
        counter++
    }
    return counter;
}

console.log(myFunction("aA", "aAAbbbb") === 3);
console.log(myFunction("z", "ZZ") === 0);