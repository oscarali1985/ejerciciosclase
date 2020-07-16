let numbers = [];
// numbers.push(1);
// numbers.push(2);
// numbers.push(3);
// numbers.push(4);
// numbers.push(5);
// for (valor inicial de la variable; condición límite; valor incremental)
for (let number = 1; number < 293; number++) {
    // comandos por cada ejecución
    numbers.push(number);
}
console.log(numbers.toString());
// for...of
// for (nombre de la variable que representa al elemento en cada ejecución 'of' nombre del arreglo que queremos iterar)
for (let number of numbers) {
    console.log(number);
}
// for...in
// for (nombre de la variable que representa la propiedad en cada ejecución 'in' nombre del objeto/arreglo que queremos iterar)
for (let index in numbers) {
    console.log(numbers[index]);
}
// forEach
numbers.forEach((number, index, resArray) => {
    console.log(`this is number: ${number} and this is index ${index}`);
    console.log(resArray.length);
});
// casi todo lo podemos hacer con el for tradicional.
let selectedNumbers = [];
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
        selectedNumbers.push(numbers[index]);
    }
}
console.log(selectedNumbers.toString());
// while
let itemIndex = 0;
while(itemIndex < numbers.length) {
    console.log(numbers[itemIndex]);
    itemIndex += 1;
}
// do while
itemIndex = 0;
do {
    console.log(numbers[itemIndex]);
    itemIndex += 1;
} while(itemIndex < numbers.length);
let people = [
    {
        name: "Ernesto",
        age: 36,
        weight: 80,
        ticket: "C"
    },
    {
        name: "Deimian",
        age: 30,
        weight: 78,
        ticket: "A"
    },
    {
        name: "Franklyn",
        age: 20,
        weight: 72,
        ticket: "B"
    },
    {
        name: "Boris",
        age: 22,
        weight: 74,
        ticket: "D"
    }
];
// for tradicional, luego for in
for (let index = 0; index < people.length; index++) {
    for (let property in people[index]) {
        console.log(`this is property: ${property}`);
        console.log(`this is value: ${people[index][property]}`);
    }
}
// for...of luego for...in
for (let person of people) {
    for (let property in person) {
        console.log(`this is property: ${property}`);
        console.log(`this is value: ${person[property]}`)
    }
}