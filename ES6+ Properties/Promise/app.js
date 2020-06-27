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


/*
const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Michael",
                surname: "Jordan"
            })
        }, 2000)
    })
}

const getUserComment = (userID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("User ID: " + userID);

            const result = [{
                    userID: 1,
                    commentID: 1,
                    comment: "Jordan is the best"
                },
                {
                    userID: 2,
                    commentID: 2,
                    comment: "Air Jordan"
                },
                {
                    userID: 2,
                    commentID: 3,
                    comment: "Jordan is the best basketball player of all time"
                }
            ]

            const userComments = result.filter((comment) => comment.userID == userID);

            resolve(userComments);

        }, 1000)
    })
}

getUserInfo().then((userInfo) => {

    getUserComment(userInfo.id).then((commentsInfo) => {
        console.log("Comments Info: " + commentsInfo);
    })
});
*/