let ernesto = {
    name: "Ernesto",
    age: 36,
    weight: 80,
    ticket: "C"
};
let deimian = {
    name: "Deimian",
    age: 30,
    weight: 78,
    ticket: "A"
};
let franklyn = {
    name: "Franklyn",
    age: 20,
    weight: 72,
    ticket: "B"
};
let boris = {
    name: "Boris",
    age: 22,
    weight: 74,
    ticket: "D"
}
function ableToDrink(person) {
    // chequea que la persona tenga 21 o más años y pese 80 o más kilos
    // si cumple con ambas, devuelve true; si no, devuelve false
    // formal
    // if (person.age >= 21) {
    //     if (person.weight >= 80) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // } else {
    //     return false;
    // }
    // modo 2
    // let mayDrink = false;
    // if (person.age >= 21) {
    //     if (person.weight >= 80) {
    //         mayDrink = true;
    //     }
    // }
    // return mayDrink;
    // modo 3
    // if (person.age >= 21) {
    //     if (person.weight >= 80) {
    //         return true;
    //     }
    // }
    // return false;
    // modo 4
    // if (person.age >= 21 && person.weight >= 80) {
    //     return true;
    // }
    // return false;
    // modo 5
    // return person.age >= 21 && person.weight >= 80;
    // modo operador ternario
    return (person.age >= 21 && person.weight >= 80) ? "sí puede" : "no puede";
};
function getDirection(person) {
    // devuelve derecha si la entrada es tipo A o C e izquierda si 
    // la entrada es tipo B
    // switch(person.ticket) {
    //     case "A":
    //         return "vaya a la derecha.";
    //     case "B":
    //         return "vaya a la izquierda.";
    //     case "C":
    //         return "vaya a la derecha.";
    //     default:
    //         return "vaya a otro estadio...";
    // }
    switch(person.ticket) {
        case "A":
        case "C":
            return "vaya a la derecha.";
        case "B":
            return "vaya a la izquierda.";
        default:
            return "vaya a otro estadio..."
    }
}
console.log(`¿A dónde va Franklyn? ${getDirection(franklyn)}`);
console.log(`¿A dónde va Deimian? ${getDirection(deimian)}`);
console.log(`¿A dónde va Ernesto? ${getDirection(ernesto)}`);
console.log(`¿A dónde va Boris? ${getDirection(boris)}`);
console.log(`¿Puede Franklyn tomar? ${ableToDrink(franklyn)}`);
console.log(`¿Puede Deimian tomar? ${ableToDrink(deimian)}`);
console.log(`¿Puede Ernesto tomar? ${ableToDrink(ernesto)}`);
let numbers = [1, 5, 2, 7, 4, 2, 8];
for (let number of numbers) {
    // console.log(number);
    switch(true) {
        case /[2-6]/.test(number):
            console.log("ganaste!");
            break;
        default:
            console.log("perdiste!");
            break;
    }
}