
//if-else statment example
let num = 0;
if (num>0)
{
    console.log(" number is a postive number " + num);
}
else if ( num < 0){
    console.log("numner is a negatice number " + num );
}
else 
{
    console.log ("number is " + num);
}
 
//switch statement example 
var day = 3 ;
switch (day)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thurday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;    
    default:
        console.log("unvalid day");
    
}

// loops [for, while, do while]

for( let i= 1; i<=5; i++)
{
 console.log("the current number is "+i+" for the for loop statement!");
}

let b = 1;
while ( b<=5)
{
    console.log( "for the while loop statement the number is ",b++);
    
}

let a = 1;
do 
{
    console.log( "for the Do-While loop statement the number is ", a++);
    
}
while (a<=5);

// control flow with break and continue

for( var i =1; i <=10; i++)
    {
if (i===5)
{
  break;
}
console.log ("current number is " + i);
}
console.log("break cause number is = " +i);

for( var i =1; i <=7; i++)
    {
if (i===5)
{
  
  console.log("contunie even if number = " +i);
  continue;

}
console.log ("current number is " + i);
}

student ("n1234324");
function student(id)
{
    console.log( "student id: "+id);

}