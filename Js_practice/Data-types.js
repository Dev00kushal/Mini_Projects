/* 
In Java Script there are 7 types of Primitive-Data-Types and Non-primitive-Data-Types are Objects

The Shortcut : N N S S B B U
Primitive Data types :
N = Null
N = Number
S = Symbol
S = String
B = Boolean
B = bigInt
U = Undefined
*/

// Example:
let a = null;
let b = 999;
let c = Symbol("Hello,I am a symbol");
let d = "Soap";
let e = true; // It can also be false
let f = BigInt("333");
let g = // you can write undefined or either leave it as it is because it is the same thing.
  console.log(typeof d); // This a function to known the data type stored in a variable.

//Non-Primitive-Data-types
/*  Objects :
  Object's are Key value pair's used for mapping 
*/

const item = {
  Kushal: true,
  Age: 16,
  Height: 5.8,
};

console.log(item["Kushal"]);
