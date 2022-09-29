//1) to find odd numbers 

let arrayNumber = [5, 12, 32, 11, 15, 17, 19, 37, 33, 57, 55, 99, 101]

//1.Print odd numbers in an array
let resultArray = function () {

    var result = arrayNumber.filter(number=>number%2!=0)

        return result;

    }


console.log(resultArray())

//2.Convert all the strings to title caps in a string array
let stringArray = ["akshay", 'is', 'a', 'smart', 'developer']

let resultStringArray = function () {

  for (i in stringArray){
      console.log (stringArray[i].toUpperCase())
  }

    }


resultStringArray();
// 3) sum of numbers in array

let resultSumArray = function (arrayNumber) {

    
let sum = 0; 
for (let i = 0; i < arrayNumber. length; i++) 
{
    sum =sum+ arrayNumber[i]; 
    
}
return sum
}
console.log(resultSumArray(arrayNumber))

// 4) to find prime numbers 
const array = [1,2,3,4,5,,6,457,58,6,78,6,67]; .

let isPrime =function(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));


// Return all the palindromes in an array

const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));
//OUTPUT: [12321, 'did']


// Remove duplicates from an array

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});
console.log(uniqueChars);
 //output:['A', 'B', 'C']




