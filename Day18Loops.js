  //1. 1 2 3 4 5 6 7 8  series of 1 to 20
  let op1="";
  let end=20;
  for(let i=1; i<=end;i++)
  {
     op1+=i+" ";
  }
    console.log(op1)
 let i=1;
  while(i<=20)
  {
    op1+=i+" ";
    i++;
  }
 console.log(op1)
  do
    {
      op1+=i+" ";
      i++;
    }while(i<=20);
  console.log(op1);

//2.1 3 5 7 9   series of 1 to 20 odd
let op="";
for(let i=1;i<=20;i+=2)
{
    op=op+i+" ";

}
console.log(op);
let i=1;
while(i<=20)
{
    op=op+i+" ";
    i++;
}
console.log(op);

   do
    {
        op=op+i+" ";
         i++;
        console.log(op);
    }while(i<=20);

//3. 0 2 4 6 8    series of even 0 to 20
for(let i=0;i<=20;i+=2)
{
    op+=i+" ";
}
console.log(op);
let i=0;
while(i<=20)
{
    op+=i+" ";
    i+=2;
}
console.log(op);
   
   do
    {
        op+=i+" ";
        i+=2;
    }while(i<=20)
    console.log(op);

//4. 0 5 10 15 20 25(5 series)

for(let i=0;i<=25;i+=5)
{
    op+=i+" ";
}
console.log(op);
let i=0;
while(i<=25)
{
    op+=i+" ";
    i+=5;
}
console.log(op);

 do
    {
        op+=i+" ";
        i+=5;
    }while(i<=25)
    console.log(op);

//5. 1 + 2 + 3 + 4 + .....

for(let i=1;i<=10;i++)
{
    op=op+i;
    if(i<=9)
    {
        op+=" + ";
    }
}
console.log(op);
let i=1;
while(i<=10)
{
    op+=i;
    
    if(i<=9)
    {
        op+=" + ";
    }
    i++;
}
console.log(op);
do

    {
        op+=i;
        
        if(i<=9)
        {
            op+=" + ";
        }
        i++;
    }while(i<=10);
    console.log(op);

 //6. 0 + 2 + 4 + 6 + ...

 for(let i=0;i<=20;i+=2)
{
    op+=i;
    if(i<=18)
    {
        op+=" + ";
    }
}
console.log(op);

let i=0;
while(i<=20)
{
    op+=i;
    if(i<=18)
    {
        op+=" + ";
    }
    i+=2;
}
console.log(op);
do
    {
        op+=i;
        if(i<=18)
        {
            op+=" + ";
        }
        i+=2;
    }while(i<=20);
    console.log(op);

   //7. 1 + 3 + 5 + 7 + 9.....
for(let i=1;i<=20;i+=2)
{
    op=op+i;
    if(i<=17)
       {
         op+=" + ";
       }

}
console.log(op);
let i=1;
while(i<=19)
{
  op=op+i;
 if(i<=17)
   {
     op+=" + ";
   }
   i+=2;
}
console.log(op);

do
    {
      op=op+i;
     if(i<=17)
       {
         op+=" + ";
       }
       i+=2;
    }while(i<=19);
    console.log(op);

//8. 0 + 5 + 10 + 15 + 20 + .....

for(let i=0;i<=25;i+=5)
{
    op+=i;
    if(i<=20)
    {
        op+=" + ";
    }
}
console.log(op);
let i=0;
while(i<=25){
    op+=i;
    if(i<=20)
    {
        op+=" + ";
    }
    i+=5;
}
console.log(op);

do{
    op+=i;
    if(i<=20)
    {
        op+=" + ";
    }
    i+=5;
}while(i<=25);
console.log(op);

//9. 1 / 1! + 2 / 2! + 3 / 3! + 4 / 4!.....

for(let i=1;i<=10;i++)
{
    op+=`${i} / ${i}!`;
    if(i<10)
        {
            op+=" + ";
        }   
}
console.log(op);

let i=1;
while(i<=10)
{
    op+=`${i} / ${i}!`;
    if(i<10)
        {
            op+=" + ";
        }   
    i++;
}
console.log(op);

do
    {
        op+=`${i} / ${i}!`;
        if(i<10)
            {
                op+=" + ";
            }   
        i++;
    }while(i<=10);
    console.log(op);

//10.  0 + 2 / 2! + 4 / 4! + 6 / 6!....

for(let i=0;i<=10;i+=2)
{
    op+=`${i} / ${i}!`;
    if(i<10)
        {
            op+=" + ";
        }   
}
console.log(op);

let i=0;

while(i<=10)
{
    op+=`${i} / ${i}!`;
    if(i<10)
        {
            op+=" + ";
        }   
    i+=2;
}
console.log(op);

do
    {
        op+=`${i} / ${i}!`;
        if(i<10)
            {
                op+=" + ";
            }   
        i+=2;
    }while(i<=10);
    console.log(op);

//11. 1 / 1! + 3 / 3! + 5 / 5!....

for(let i=1;i<=11;i+=2)
{
    op+=`${i} / ${i}!`;
    if(i<=10)
        {
            op+=" + ";
        }   
}
console.log(op);

let i=1;
while(i<=11)
{
    op+=`${i} / ${i}!`;
    if(i<=10)
        {
            op+=" + ";
        }   
    i+=2;
}
console.log(op);

do
    {
        op+=`${i} / ${i}!`;
        if(i<=10)
            {
                op+=" + ";
            }   
        i+=2;
    }while(i<=11);
    console.log(op);


