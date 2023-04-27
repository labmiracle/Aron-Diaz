
function addOnlyNums(...arguments){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === "number"){
            sum += arguments[i];
        }
    }
    return sum;
}

console.log(addOnlyNums(7, 3, "b", 2));


