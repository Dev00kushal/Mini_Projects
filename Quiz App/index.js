const question = document.getElementById("question")
let  option_1 = document.getElementById("opt-1")
let  option_2 = document.getElementById("opt-2")
let  option_3 = document.getElementById("opt-3")
let  option_4 = document.getElementById("opt-4")
let  option_5 = document.getElementById("opt-5")
let  option_6 = document.getElementById("opt-6")
const url = "https://quizapi.io/api/v1/questions?apiKey=FylkAmzCcCtZZds4y0raA7gkD6tkQR2BYOcvTQNG&category=linux&difficulty=Easy&limit=10&tags=Linux"

const getQuiz = () =>{  
    fetch(url)
    .then((data)=> data.json())
    .then((data)=> {
            for (let i = 0; i < 10; i++) {
            let ques = data[i].question
            let ans =  data[i].answers   
            console.log(data)
            console.log(data[i].correct_answer)
            question.innerHTML = "Q. " + ques;
            option_1.innerHTML = "a) " + ans.answer_a ;
            option_2.innerHTML = "b) " + ans.answer_b ;
            option_3.innerHTML = "c) " + ans.answer_c ;
            option_4.innerHTML = "c) " + ans.answer_d ;
            option_5.innerHTML = "c) " + ans.answer_e ;
            option_6.innerHTML = "c) " + ans.answer_f ;
            break
            }
    })
        .catch((error)=> console.log(error))
    } 
getQuiz()