// Maps ->  Key - Value 

let myMap = new Map(); // Yeni bir map oluşturduk.

// console.log(typeof myMap); // Referans Type

const key1 = "Onur";
const key2 = {
    a: 100,
    b: 200
};
const key3 = () => 4;

// Set Method - Map'e deger ataması yapar

// myMap.set(key1, "String Value");
// myMap.set(key2, "Object Literal");
// myMap.set(key3, "Function Value");

// Get Method - Map'de bulunan key degerlerini getirir

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap.size);

const cities = new Map();

cities.set("İstanbul", 34);
cities.set("Ankara", 06);
cities.set("İzmir", 35);