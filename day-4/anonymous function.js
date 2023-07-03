(a)
let nums = [8, 19, 5, 6, 14, 9, 13];
let odds = [];
for (let num of nums) {
  if (num % 2 === 1) {
    odds.push(num);
  }
}
console.log(odds);



(b)
function toCase(str) {
    return str.toLowerCase().split(' ').map
    (function (letter) 
    {
      return (letter.charAt(0).toUpperCase() + letter.slice(1));
    })
   .join(' ');
  }
  console.log(toCase("the strings to title caps in a string"));



(c)
 var a= [1,2,3,4,5]
 var sum = 0
for(var i=0; i< a.length; i++)
{
    sum += a[i];
}
console.log("sum is", + sum);



(d)
var nums = [1,2,3,4,5,6,7,8,9,10]
nums = nums.filter((number) =>
{
    for(var i=2; i<= Math.sqrt(number); i++){
    if (number % i === 0)
    return false;
}
return true;
});
console.log(nums)



(e)
let arr = ["food", "did", "level", "pop", "deed",];
let palindromes = arr.filter(a =>
  {
      let len =a.length;
      for (i=0; i<len/2; i++)
      {
          if (a[i] == a[len - i - 1]){
              return true;
          }
          else{
              return false;
          }
          }
      })
      console.log(palindromes)


(g)
let Arr = ["racebike", "duke", "racebike", "duke", 250, 250];
function removeDuplicates(arr)
{
  return arr.filter((item,index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(Arr));
         

(h)
let Arr =[ 1, 3, 5, 6, 7, 9]
let N = Arr.length;
let K = 3;
function rotate(a, n, k)
{
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            document.write(a[n + i - k]);
        }
        else {
       document.write((a[i - k]));
        }
    }
}
rotate(Arr, N, K)