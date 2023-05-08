// Global scope
let variable = "Kushal";
function print_variables() {
  console.log(variable, "Keep your motivation up code until you Ace it!");
}
print_variables();

//Local scope
function sum() {
  let a = 2;
  let b = 3;
  console.log(a + b);
}
sum();

// If else statement
let Work_hour = 12;
if (Work_hour > 10) {
  console.log("You are going to get promomted");
} else if (Work_hour == 7) {
  console.log("Good job");
} else {
  console.log("You are a cheater");
}
// Operator
let x = 10;
x >= 2;
x <= 2;
x *= 2;
x /= 2;
x == 2;
x **= 2;
x %= 2;
x++;
x--;
// Unary negation
let y = 4;
console.log(-y);

// Unary Plus
let f = "70";
console.log(+f);
console.log(x);

// Comparision Operator
let m = [10, 20, "30", 40, 50, 90, 80, 70];

//Equal
console.log(m[0] == 10);

//Not Equal
console.log(m[1] != 20);

// Deeply Equal
console.log(m[2] === 30);

// Strict not Equal
console.log(m[3] !== 40);
// console.log(typeof m[3])

// Greater Than
console.log(m[4] > 30);

//Greater than or equal
console.log(m[5] >= 30);

// Less than
console.log(m[6] < 50);

// less than  equal to
console.log(m[7] <= 08);

// Logical operators
let किराना = ["केरा", "साबुन", "कोक", "आँप", " सुन्तला"];

// AND
if (किराना.includes("केरा") && किराना.includes("आँप")) {
  console.log(" घर भित्रै फलफूल उपलब्ध छन् बाहिर जानु पर्दैन ");
}

// OR
if (किराना.includes(" कोक ") || किराना.includes("पेप्सी")) {
  console.log(" त्यसको लागि प्रतिस्थापन छ");
}

// Not
if (!किराना.includes(" चामल ")) {
  console.log("भित्र भात छैन मदरफकर ल्याऊ");
}
 let a  = 8
 let b = 9 
 console.log(a + b)
// Exercise
const Age = 22;
const userId = 22332;
let typing_speed = 1.5;
let pageNumber = 2;

let Addition_of_Age_username = Age + userId;
let Subtraction_of_pagenumber_typing_speed = pageNumber - typing_speed;

let finalresult = Addition_of_Age_username * Subtraction_of_pagenumber_typing_speed

let evenoddresult = finalresult == 0 ? "this is a even number": "no it is odd";

console.log(evenoddresult) 
let q = 2;
let prime_number =  q == 0 ? "Zero": "not zero"
console.log(prime_number)

// Any ilogical mathematical operation returns NAN(Not a number)
let Rap_Name = "KUSHAL";
let RapID = 22121;
let combination_name = Rap_Name / RapID
console.log(combination_name)

// Increment and Decrement
let passkey = 12
let exitkey = 13
console.log(++passkey,--passkey)
console.log(++exitkey,--exitkey)

// BIgInt
let distansce_till_mars = 2594522222222222222n;
console.log(typeof distance_till_mars)

let Error = null;