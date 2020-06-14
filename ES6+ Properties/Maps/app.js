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

// const cities = new Map();

// cities.set("İstanbul", 34);
// cities.set("Ankara", 06);
// cities.set("İzmir", 35);

// forEach Loop

// cities.forEach(function (value, key) {
//     console.log(key, value);
// })

// For Of Loop

// for (let [key, value] of cities) { // Destruction Structure
//     console.log(key, value);
// }

// Map Keys

// for (let key of cities.keys()) {
//     console.log("Key: " + key);
// }

// Map Values

// for (let value of cities.values()) {
//     console.log("Value: " + value);
// }

// const array = [
//     ["key1", "value1"],
//     ["key2", "value2"]
// ];

// const lastMap = new Map(array); // Array'den Map oluşturduk

// console.log(lastMap);

// Maplerden Array Oluşturma

const cities = new Map();

cities.set("İstanbul", 34);
cities.set("Ankara", 06);
cities.set("İzmir", 35);

const array = Array.from(cities); // Cities Map'ini Array'e dönüştürdük.

// Burada dizi içerisinde dizi mevcut.

// [["İstanbul",34],["Ankara",06],["İzmir",35]]

console.log(array);