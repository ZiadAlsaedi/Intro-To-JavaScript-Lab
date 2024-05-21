///lab1

//1
let lengthRectangle=5;
let WidthRectangle=4;
let Rectangle=lengthRectangle*WidthRectangle;
console.log(Rectangle)
//2
let temperatureC =50;
let tempToF= (temperatureC*1.8)+32;
console.log(temperatureC +" C is "+ tempToF+" F");

let temperatureF =122;
let tempToC=(temperatureF-32)/1.8;
console.log(temperatureF +" F is "+ tempToC+" C");

//3
let hours=3;
let second=10800;
let result3= hours*3600;
console.log(hours +" hours  = "+ result3 +" second");
//4
let thingOne = "Ziad";
let thingTwo = " Alsaedi";
console.log(thingOne + thingTwo);
//5
var bill=10.25 + 3.99 + 7.15;
var tip=bill* 0.15;
var total =bill+tip;
console.log("Total is " + total)

//6
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining"
let madLib ="The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);

//7 
let firstName='ziad'
let interest='footbal'
let hobby='play video games'
let awesomeMessage="Hi, my name is "+ firstName + " I love "+interest +" In my spare time, I like to "+ hobby
console.log(awesomeMessage)

//lab2
//1
var eatsPlants = true;
var eatsAnimals = false;
var result = eatsPlants ?  (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);
    console.log(eatsPlants ,eatsAnimals,result );
//2

var musicians = 5;
if(musicians <= 0){
console.log("not a group")
}
else if (musicians == 1){
    console.log("solo") 
}
else if (musicians == 2){
    console.log("duet") 
}
else if (musicians == 3){
    console.log("trio") 
}
else if (musicians == 4){
    console.log("quartet") 
}
else  console.log("this is a large group") 

//3
var room = "gallery room";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "ballroom room" && suspect === "Mr. Kalehoff") {
    weapon = "poison"; 
    solved = true;
  
} else if (room === "gallery room" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
     solved = true;
  

} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick"; 
    solved = true;

} else {
    weapon = "knife"; 
    solved = true;
    suspect = "Mr. Parkes";
    room = "dining room"
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

//4
var balance = -1;
var checkBalance = true;
var isActive = true;

if (!checkBalance) {
console.log("Thank you.Have a nice day!");
} else if(isActive === true && balance > 0) {
console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (!isActive) {
console.log("Your account is no longer active.");
} else if (isActive && balance === 0) {
console.log("Your account is empty.");
} else if (isActive && balance < 0) {
console.log("Your balance is negative. Please contact bank.");
}

//5
var flavor = "chocolate";
var vessel = "cone";
var toppings = "sprinkles";
if(flavor === "vanilla" || flavor === "chocolate") {
if(flavor === "vanilla" && vessel === "cone" || vessel === "bowl" && toppings === "spirnkles" || toppings === "peanuts"){
console.log( "I'd like two scoops of "+ flavor + " ice cream in a "+ vessel + " with " + toppings +".")
} else if (flavor === "chocolate" && vessel === "cone" || vessel === "bowl" && toppings === "spirnkles" || toppings === "peanuts"){
console.log( "I'd like two scoops of "+ flavor + " ice cream in a "+ vessel + " with " + toppings +".")
} else {
console.log("pick vanilla or chocolate ");
}
}
