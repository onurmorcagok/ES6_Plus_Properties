// Sets - Kümeler

// Bir değeri yalnızca bir defa taşıması adına kullanılır.

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Onur");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({
    a: 10,
    b: 20,
    c: 30
});

const mySet2 = new Set([100, 3.14, "Onur", true]);

// console.log(mySet);
// console.log(mySet2);

// console.log(mySet.size);
// console.log(mySet2.size);

// Delete Method

// mySet.delete("Onur");
// console.log(mySet);

// Has Method - Değer var mı yok mu kontrol eder

// console.log(mySet.has("Onur"));
// console.log(mySet.has("2000"));

// console.log(mySet.has([1,2,3])); // Reference Type

// forEach Loop

// mySet.forEach(function (value) {
//     console.log(value);
// })

// For Of Loop

// for (let value of mySet) {
//     console.log(value);
// }

// Set'lerden Array Oluşturma

const array = Array.from(mySet);

console.log(array);