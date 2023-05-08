// If there is a function under a function then it is a callback

function login(){
  console.log("Logged in");
}

function displayUser(){
  console.log("Hello Kushal ");
}

login(displayUser())