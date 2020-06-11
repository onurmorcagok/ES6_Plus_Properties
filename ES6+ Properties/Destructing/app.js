// Destructing 

// Array veya Obje içerisinden değer almak için kullanılan bir yöntemdir.

/*

let number1, number2;

array = [10, 20, 30, 40, 50];

number1 = array[0];
number2 = array[1];

Destructing

[number1,number2] = array;
const [number1,number2] = array;

console.log(number1,number2);

Object Destructing

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
};

const {a:number1,b:number2,c:number3} = numbers;

const {a,c,e} = numbers;

console.log(a,c,e);

Function Destructing

const getLangs = () => ["Java","Python","C++"]; // Arrow Function

const [lang1,lang2,lang3] = getLangs();

console.log(lang1,lang2,lang3);


Object

const person = {
    name: "Onur",
    year: 1996,
    salary: 5000,
    showInfos : () => console.log("Bilgiler Gösteriliyor !")
}

const {name:isim,year:dogumYili,salary:maas,showInfos:bilgileriGoster} = person;

console.log(isim,dogumYili,maas);
bilgileriGoster();

*/