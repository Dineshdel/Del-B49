function calci(opration){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
 
    //const num1 = Number(prompt("Enter the value of num 1:"));
   // const num2 = Number(prompt("Enter the value of num 2:"));
 
    let result;
 
    switch(opration){
     case "add":
         result = num1 + num2;
         break;
         case "sub":
         result = num1 - num2;
         break;
         case "mul":
         result = num1 * num2;
         break;
         case "div":
         result = num1 / num2;
         break;
         default:
             result = "invalid!!!!!"
    }
    //const message = confirm("Show the Result...")
   // if(message){
   //  document.getElementById("result").innerText = result;
   // }else{
    //  document.getElementById("result").innerText = "Do not show the result"
    //}
     
       const addEle = document.getElementById("add");
       addEle.addEventListener("click", function (){
       calci("add");
     })
     const subEle = document.getElementById("sub");
       subEleEle.addEventListener("click", function (){
       calci("sub");
     })
     const mulEle = document.getElementById("mul");
       mulEleEle.addEventListener("click", function (){
       calci("mul");
     })
     const divEle = document.getElementById("div");
       divEle.addEventListener("click", function (){
       calci("div");
     })
    
    setInterval(function() {
     alert( "Hii...");
    }, 2000);
   // alert(result);
   //document.getElementById("result").innerText = result;
 }
  