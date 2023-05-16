const question = document.getElementById("question")
let  option_1 = document.getElementById("opt-1")
let  option_2 = document.getElementById("opt-2")
let  option_3 = document.getElementById("opt-3")
const url = "https://quizapi.io/api/v1/questions?apiKey=n7kKFxRjleTJgNC0lPCthBDq63VkHmijgCsGwc3J&category=linux&difficulty=Medium&limit=10&tags=Linux"

const getQuiz = () =>{
  
    for (let i = 0; i < 10; i++) {
        fetch(url)
        .then((data)=> data.json())
        .then((data)=> console.log(data[i].question))
        .catch((error)=> console.log(error))
    } 
}
getQuiz()