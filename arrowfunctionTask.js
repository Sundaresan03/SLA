//1. 1 2 3 4 5 6 7 8  series of 1 to 20
let series=(end) =>{
let op1="";
  for(let i=1; i<=end;i++)
  {
     op1+=i+" ";
  }
  return op1;
}
    console.log(series(20));

//2.1 3 5 7 9   series of 1 to 20 odd
let oddSeries= (end) =>{
let op="";
for(let i=1;i<=end;i+=2)
{
    op=op+i+" ";

}
return op;
}
console.log(20);

//3. 0 2 4 6 8    series of even 0 to 20
let evenSeries=(end) =>{
let op="";
for(let i=0;i<=end;i+=2)
     {
         op+=i+" ";
     }
     return op;
}
console.log(evenSeries(20));

//4. 0 5 10 15 20 25(5 series)
let fiveSeries= (end) =>{
     let op="";
for(let i=0;i<=end;i+=5)
     {
         op+=i+" ";
     }
     return op;
}
console.log(fiveSeries(25));

//5. 1 + 2 + 3 + 4 + .....
let numberSeries= (end) =>{
     let op="";
for(let i=1;i<=end;i++)
     {
         op=op+i;
         if(i<=9)
         {
             op+=" + ";
         }
     }
     return op;
}
console.log(numberSeries(10));

//6. 0 + 2 + 4 + 6 + ...
let evenSeries= (end) =>{
     let op="";
for(let i=0;i<=end;i+=2)
     {
         op+=i;
         if(i<=18)
         {
             op+=" + ";
         }
     }
     return op;
}
console.log(evenSeries(20));

   //7. 1 + 3 + 5 + 7 + 9.....
   let oddSeries= (end) =>{
     let op="";
   for(let i=1;i<=end;i+=2)
     {
         op=op+i;
         if(i<=17)
            {
              op+=" + ";
            }
     
     }
     return op;
}
console.log(oddSeries(20));

//8. 0 + 5 + 10 + 15 + 20 + .....
let fiveSeries=(end) =>{
     let op="";
for(let i=0;i<=end;i+=5)
     {
         op+=i;
         if(i<=20)
         {
             op+=" + ";
         }
     }
     return op;
}
console.log(fiveSeries(25));

//9. 1 / 1! + 2 / 2! + 3 / 3! + 4 / 4!.....
let factSeries=(end) =>{
     let op="";
for(let i=1;i<=end;i++)
     {
         op+=`${i} / ${i}!`;
         if(i<10)
             {
                 op+=" + ";
             }   
     }
     return op;
}
console.log(factSeries(10));

//10.  0 + 2 / 2! + 4 / 4! + 6 / 6!....
let evenfactSeries=(end) =>{
     let op="";
for(let i=0;i<=end;i+=2)
     {
         op+=`${i} / ${i}!`;
         if(i<10)
             {
                 op+=" + ";
             }   
     }
     return op;
}
console.log(evenfactSeries(10));

//11. 1 / 1! + 3 / 3! + 5 / 5!....
let oddFactSeries=(end) => {
     let op="";
for(let i=1;i<=end;i+=2)
     {
         op+=`${i} / ${i}!`;
         if(i<=10)
             {
                 op+=" + ";
             }   
     }
     return op;
}
console.log(oddFactSeries(11));
 
 //12.Factorial Program
const factorial = (n) => {
     let fact = 1;
 
     for (let i = 1; i <= n; i++) {
         fact *= i;
     }
 
     return fact;
 };
 
 let n = 5;
 console.log(factorial(n));

//13.Prime Number Program
let Primenumber=() =>{
let count=0;
let num=Number(prompt("Enter a number"));
     for(let i=1;i<=num;i++)
     {
        
        if(num%i==0)
     {
           count++;
     }
     }
     if(count==2)
     {
        console.log("Prime number");
     }
     else
     {
        console.log("Not a Prime Number");
     }

}
Primenumber();

//14.Prime Number Program Series
let primeSeries=()=>{
let op="";
for(let num=2;num<=100;num++){
let count=0;
        
     for(let i=1;i<=num;i++)
     {
        
        if(num%i==0)
     {
           count++;
     }
     }
     if(count===2)
     {
        op+=num+" ";
     }

}
 console.log(op);
}
primeSeries();

// <!--15.Armstrong Number -->
let Armstrong= ()=>{
let num=Number(prompt("Enter a Number"));
let temp=num;
let sum=0;
while(temp!=0)
{
  let rem=parseInt(temp%10);
  sum=sum+(rem*rem*rem);
  temp=parseInt(temp/10);
}
if(sum==num)
{
 console.log("Armstrong number");
}
else
{
 console.log("Not an Armstrong Number");
}
}
Armstrong();

//16.print the Armstrong no series
let armstrongSeries= () =>{
let op="";
for(let num=1;num<=1000;num++){
let temp=num;
let sum=0;
while(temp!=0)
{
  let rem=parseInt(temp%10);
  sum=sum+(rem*rem*rem);
  temp=parseInt(temp/10);
}
if(sum===num)
{
  op+=num+" ";
}

}
console.log(op);
}
armstrongSeries();

//17.Fibnacie Series(0 1 1 2 3 5 8 13..)
let fibonacci=()=>{
let first=0;
let second=1; 
let op="";

for(let i=1;i<=10;i++)
{
     op+=first+" ";
     let next=first+second;
     first=second;
     second=next;
   
}
console.log(op);
}
fibonacci();

//18.Print the 5 Table(1 * 5 = 5)
 let fivetables=()=>{
for(let i=1;i<=10;i++)
     {
       console.log(`${i} * 5 = ${i*5}`);
     }
  }
  fivetables();

 //19.Sum of digit(1 + 2 + 3 + ...)
let sumDigits=()=>{
 let sum=0;
 let num=123;
 while(num!=0)
 {
   let rem=parseInt(num%10);
   sum=sum+rem;
   num=parseInt(num/10);
 }
 console.log(sum);
}
sumDigits();

//20.Palindrome or not    BAAB,MALAYALAM
let Palindrome=()=>{
let str=prompt("Enter a string");
let reverse="";
for(let i=str.length-1;i>=0;i--)
{
    reverse+=str[i];
}
if(str==reverse)
{
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}
}
Palindrome();