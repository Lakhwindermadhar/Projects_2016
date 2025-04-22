//const hobbies=["Sports","Cooking","Reading"];
//console.log(hobbies[0]);

//hobbies.push("working");
//console.log(hobbies);

//const index= hobbies.findIndex((item) => item==="Sports");

//console.log(index);

//const editedHobbies= hobbies.map((item)=>({text:item}));
//console.log(editedHobbies);

//const [firstName,lastName]=["Max","Schwarzmuller"];

//console.log(firstName);
//console.log(lastName);


//const {name:userName,age}={name:"Marks",age:34};

//console.log(userName);
//console.log(age);


//const hobbies=["Sports","Cooking"];

//const newHobbies=["Reading"];

//const margedHobbies=[...hobbies,...newHobbies];
//console.log(margedHobbies);

//// const user={
//    name:"mark",
//    age:34
//};
//
//const extendedUser={
//    isAdmin:true,
//    ...user
//}
//
//console.log(extendedUser);
//
//const password=prompt("Your password");
//
//if(password==="Hello"){
//    console.log("Hello works");
//} else if (password==="hello"){
//    console.log("hello works");
//}else {
//    console.log("Acess not granted");
//}
//
//const hobbies=["sports","cooking"];
//
//for (const hobby of hobbies){
//    console.log(hobby);
//}
//
//function handleTimout(){
//    console.log("Time out!");
//}
//const handleTimout2= ()=>{
//    console.log("Time out...again!");
//};    
//
//setTimeout(handleTimout,2000);
//setTimeout(handleTimout2,3000);
//setTimeout(()=>{
//    console.log("More timing out...");
//},4000);
//
//
//function greeter (greetFn){
//    greetFn();
//}
//
//greeter(()=>console.log("Hi"));

const calcTip=function (bill){
    return bill>=50 && bill <=300 ? bill*0.15 : bill*0.2;
}

const bills=[125,555,44];
const tips =[calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills,tips,totals);