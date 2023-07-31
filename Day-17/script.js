let promiseObj = new Promise((resolve, reject) => {
    console.log("check the account balance..");

   // resolve("Accound Balance is Rs.2000...");
    reject("Accound Pin is Wrong!!!")
});

// way-1
console.log(promiseObj);

promiseObj.then(
    (val) => {
        console.log("processing....", val);
    },
    (err) => {
        console.log("processing...", err);
    }
);

 //way-2

  //  promiseObj
//      .thin((val) => {
//         console.log("processing....", val);
//      })
//      .catch((err) => {
//         console.log("processing....", err);
//      });

