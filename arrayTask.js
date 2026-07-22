//1.Use push, pop, shift, unshift on an array.
let arr=[1,2,3,4,5];
console.log(arr.push(6));
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(0));
console.log(arr);

//2.Print all elements of an array using for loop.

let arr=[1,2,3,4,5];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//3.Use map to double all numbers in an array.

let num = [100,200,300];
let doubleValue = num.map(num => num * 2);
console.log(doubleValue); 

//Use filter to get even numbers from an array.

let nums=[1,2,3,4,5,6];
let even=nums.filter(n => (n%2==0));
console.log(even);

//Use reduce to find the sum of an array.

let sums=[1,2,3,4,5,6];
let sumValue=sums.reduce((total,n)=> total+n);
console.log(sumValue);

//Find the first number greater than 10.

let numbers=[1,2,12,15,33];
let nums=numbers.find(n =>n>10);
console.log(nums);

//Check if array includes a specific value.

let nums=[1,2,3,4,5];
console.log(nums.includes(2));