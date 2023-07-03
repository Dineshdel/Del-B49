
var num = [ 10, 20, 30, 40, 50] 
for (var i=0; i < num.length; i++) {
   console.log(num[i])
}

var person = {
   fname: "dinesh",
   lname: "del",
   age: 23
}; 
for (let x in person) {
   console.log(x + ": "+ person[x])
}


var names = ["duke", "ktm", "ducati", "bmw", "mini"];
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index );
   console.log( "Value is: "+currentValue);
}