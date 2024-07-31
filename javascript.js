// comparing two arrays of equality
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const equalValues = (array1. length === array2. length) && array1. every((value, index) => value === array2[index]);
if (equalValues) {
console. log("The arrays have equal values.");
} else {
console. log("The arrays do not have equal values.");
}

// Create an array of arrays
let arrayOfArrays = [
    [1, 2, 3],   
    [4, 5, 6],   
    [7, 8, 9]     
];
console.log(arrayOfArrays);
console.log(arrayOfArrays[0]); 

//array deduplication 
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
var n = arr.length;
n = removeDuplicates(arr, n);
for (var i = 0; i < n; i++) console.log(arr[i] + " ");
function removeDuplicates(arr, n) {
  if (n == 0 || n == 1) return n;
  var temp = new Array(n);
  var j = 0;
  for (var i = 0; i < n - 1; i++) if (arr[i] != arr[i + 1]) temp[j++] = arr[i];
  temp[j++] = arr[n - 1];
  for (var i = 0; i < j; i++) arr[i] = temp[i];
  return j;
}

//Sorting an array with complex object
let people = [
    { name: 'Alice', age: 30, height: 165 },
    { name: 'Bob', age: 25, height: 175 },
    { name: 'Charlie', age: 35, height: 180 },
    { name: 'David', age: 30, height: 170 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);

//Array Merging
const heroes = ['Batman', 'Superman'];
const villains = ['Joker', 'Bane'];
const all = [...heroes, ...villains];
console.log(all);