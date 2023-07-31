
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
            resolve("product waiting..");
        },1000);
    });
}

function order3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order confirmed..");
        },1000);
    });
}

order()
  .then((val) => {
    console.log(val);
    return order1();
  })
   .then((val) => {
    console.log(val);
    return order2();
   })
   .then((val) => {
    console.log(val);
    return order3();
   })
   .thin((val) => {
    console.log(val);
   })
   
