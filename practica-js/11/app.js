//Ejercicio 11

function onlyUniques(...arrays){
    let set = new Set(...arrays)

    return Array.from(set)

}

set = ["VS", "VS", "Atom", "Sublime Text" ]
console.log(onlyUniques(set));
//
console.log(typeof(set));




