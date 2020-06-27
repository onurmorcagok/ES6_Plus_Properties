/*
const asyncFunction = (number, callback) => {

    const result = number * 2;
    callback(result);
}

asyncFunction(5, function (result) {
    console.log("Result: " + result);

    asyncFunction(result, function (newResult) {
        console.log("New Result: " + newResult);

        asyncFunction(newResult, function (lastResult) {
            console.log("Last Result: " + lastResult);
        })
    })  
});
*/

/*
const coffeeOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 3000)
    })
}

const cheesecakeOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000)
    })
}

const prepareOrder = () => {

    let coffeePrepare = false;
    let cheesecakePrepare = false;
    
    console.log("Kahve Hazırlanıyor..");

    coffeeOrder().then((coffeeStatus) => {
        coffeePrepare = coffeeStatus;
        console.log("Kahveniz hazır henüz servis edilmedi..");

        console.log("Cheesecake Hazırlanıyor..");
        cheesecakeOrder().then((cheesecakeStatus) => {
            console.log("Chessecake Hazır..");
            cheesecakePrepare = cheesecakeStatus;
            console.log(`Kahve hazır mı: ${coffeePrepare}, Chessecake hazır mı: ${cheesecakeStatus}`);
        })
    })
}

prepareOrder();
*/

