/*  Important-Concept : var can be redefined which might create more confusion into the code as we create more variables later to our code*/

// Tutorial:
var a = "Astrophysics";
var a = "Metaverse";
console.log(a) // This going to print Meta-verse as I mentioned var property while ago

/* Important-Concept: So in order to not replicate a variable twice we use let as it doesnot allow us to reuse the same variable twice*/

//Tutorial:
let a = "EcmaScript";
let a = "Json"; // This line is going to throw error as let doesnot allows to use the same variable again
console.log(a)  

/* Important Concept: In cases we want to change the value of the variable with in let we can do it directly */

//Tutorial:
let Plastic = "Milk";
Plastic = "Biscuit";
console.log(Plastic);

/* Important : Now there is constant. The constant variable cannot be Redefined or updated because it only writen once */

// Tutorial:
const Armani = " Ambani";
// Armani = 0 -> This throws an error
// let Armani = " Error";  -> So does this
// var Armani = "Inapprpriate" -> This is also going to throw and error Only once ca nwe use constant 

/*
Insight's you should remember form this Chapter :

1. Never use (var) as it is outdated and only increases the probability of code to be full of bugs.

2.Use more (const) when you know you are not going to change the variable value pretty often and that is what happens in most of the cases.

*/