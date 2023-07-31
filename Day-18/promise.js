function order() {
    return new promiseObj((resolve, reject) => {
        setTimeout(() => {
            resolve("product visited..");
        },1000);
    });
}

function order1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("product checking..");
        },1000);
    });
}

function order2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("payment compelet..");
        },1000);
    });
}
 
Promise.all((order(), order1(), order2(), order3()))
.then((val) => {
    console.log(val);
    console.log("Order confirmed..");
})
.catch