
let myString="Aabc^dEFGHi@JKlmnOPQRS^&*@";

let atoSmol= /[a-z]/g;
let NotAtozSmall =/[^a-z]/g;
let aaa =/[^A-Z]/g;
let ccc =/[^a-z^A-Z]/g;

console.log(myString.match(atoSmol));
console.log(myString.match(NotAtozSmall));
console.log(myString.match(aaa));
console.log(myString.match(ccc));

