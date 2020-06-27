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

    
})