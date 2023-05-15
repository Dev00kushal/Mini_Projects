let answer_one = document.getElementById("ans-1");
let answer_two = document.getElementById("ans-2");
let answer_three = document.getElementById("ans-3");
let popup = document.querySelector(".popup")    

answer_one.addEventListener("click",()=>{
    setTimeout(()=>{
        answer_one.style.backgroundColor = "green";
        answer_two.style.backgroundColor = "red";
        answer_three.style.backgroundColor = "red";
        // popup.style.display = "block";
    },1000) 
 })
 answer_two.addEventListener("click",()=>{
    setTimeout(()=>{
        answer_one.style.backgroundColor = "green";
        answer_two.style.backgroundColor = "red";
        answer_three.style.backgroundColor = "red";
    },1000)
 })
 answer_three.addEventListener("click",()=>{
    setTimeout(()=>{
        answer_one.style.backgroundColor = "green";
        answer_two.style.backgroundColor = "red";
        answer_three.style.backgroundColor = "red";
    },1000)
 })



