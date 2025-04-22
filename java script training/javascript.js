//let inStock= true


//if(inStock){
 //   console.log("item is instock, Proceeding with your purchase");      
   // } 


//let userAge=44   
//if(userAge>=18){
//console.log("you are eligible")
//} 



let isLoggedIn= false;

if (isLoggedIn){
console.log("Welcome back,user");    
}
else{
console.log("Welcome guest,please login");    
}


let isRegistered=true
if(isRegistered){
console.log("You are eligible to vote");
}else{
console.log("You are not eligible,please register");
}


//-----else if statement


let trafficlight=""
if( trafficlight==="red"){
console.log("stop");    
}else if(trafficlight==="yellow"){
console.log("prepare to stop");  
}else if(trafficlight==="green"){
console.log("go");
}else{
console.log("invalid traffic");
}


//------SWITCH STATEMENT----



let dayNumber = 9;

switch (dayNumber){
case 0:
console.log("Sunday");
break;
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break; 
case 3:
console.log("Wednesday");
break;
case 4:
console.log("Thursday");
break;   
default:
console.log("invalid number");
}