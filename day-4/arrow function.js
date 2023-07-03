
(a)
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let oddNumbers = nums.filter(eles => eles % 2 == 0)
                                    .map(eles => eles ** 2);
console.log(oddNumbers);


(c)
sum = (a, b) => {
    return(a+b)
  }
     c = sum(12,11)
    console.log(c)


(d)
const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);


(e)
const getAllPalindromes = (words) => {
    return words.filter((word) => {
     word.split("").reverse().join("") === word;
     });
   };
   
   console.log(getAllPalindromes(["hello", "noon"]));