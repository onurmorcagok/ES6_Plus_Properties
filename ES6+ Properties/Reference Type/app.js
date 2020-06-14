const person = {
    name: "Onur M.",
    age: 24,
    title: "Software Developer"
};

const person2 = {
    name: "Onur M.",
    age: 24,
    title: "Software Developer"
};

// console.log(person);
// console.log(person2);

let a = "Onur Morcagok";
let b = "Onur Morcagok";

// console.log(a);
// console.log(b);

// Type Control

// if (a === b) { 
//     console.log("True");
// }

// if (person === person2){
//     console.log("True");
// }

// Reference Type bellekte adres tuttuğu/gösterdiği için içerikler aynı dahi olsa
// adres değeri farklı olduğu için Primitive Type arasında fark vardır.

const cities = new Map();

const key = [1,2,3];

cities.set("İstanbul",34);
cities.set("İzmir",35);

cities.set(key,"Array");

console.log(cities.get("İstanbul")); // Primitive Type olduğu için bu sonucu alabiliriz.

console.log(cities.get([1,2,3])); // undefined - Reference Type oldugu icin sonucu alamadık.

console.log(cities.get(key));
