// Asychronous code is the code which does not traffic  the call stack and let the code execute
// While the call stack is not empty the code waits on Callback Queue 

setTimeout(function my_fn(){
    console.log("I am the first")
}, 5000);
console.log("I am the second ");
console.log("I am the last ");
