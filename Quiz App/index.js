const question = document.getElementById("question")
let  option_1 = document.getElementById("opt-1")
let  option_2 = document.getElementById("opt-2")
let  option_3 = document.getElementById("opt-3")
let  option_4 = document.getElementById("opt-4")
let  option_5 = document.getElementById("opt-5")
let  option_6 = document.getElementById("opt-6")
const url = "https://quizapi.io/api/v1/questions?apiKey=FylkAmzCcCtZZds4y0raA7gkD6tkQR2BYOcvTQNG&category=linux&difficulty=Easy&limit=10&tags=Linux"

const main = () => {  
    fetch(url)
    .then((data)=> data.json())
    .then((data)=> {
            for (let i = 0; i < data.length; i++) {  
            let ques = data[i].question
            let ans =  data[i].answers   
            if(ans.answer_a == null){
                question.innerHTML = "Q. " + ques;
                option_1.style.display = "none";
                option_2.innerHTML = "b) " + ans.answer_b ;
                option_3.innerHTML = "c) " + ans.answer_c ;
                option_4.innerHTML = "d) " + ans.answer_d ;
                option_5.innerHTML = "e) " + ans.answer_e ;
                option_6.innerHTML = "f) " + ans.answer_f ;
                break 
            }
            else if(ans.answer_b == null){
                question.innerHTML = "Q. " + ques;
                option_1.innerHTML = "a) " + ans.answer_a ;
                option_2.style.display = "none";
                option_3.innerHTML = "c) " + ans.answer_c ;
                option_4.innerHTML = "d) " + ans.answer_d ;
                option_5.innerHTML = "e) " + ans.answer_e ;
                option_6.innerHTML = "f) " + ans.answer_f ;
                break 
            }
            else if(ans.answer_c == null){
                question.innerHTML = "Q. " + ques;
                option_1.innerHTML = "a) " + ans.answer_a ;
                option_2.innerHTML = "b) " + ans.answer_b ;
                option_3.style.display = "none";
                option_4.innerHTML = "d) " + ans.answer_d ;
                option_5.innerHTML = "e) " + ans.answer_e ;
                option_6.innerHTML = "f) " + ans.answer_f ;
                break 
            }
            else if(ans.answer_d == null){
                question.innerHTML = "Q. " + ques;
                option_1.innerHTML = "a) " + ans.answer_a ;
                option_2.innerHTML = "b) " + ans.answer_b ;
                option_3.innerHTML = "c) " + ans.answer_c ;
                option_4.style.display = "none";
                option_5.innerHTML = "d) " + ans.answer_e ;
                option_6.innerHTML = "f) " + ans.answer_f ;
                 break                
            }
            else if(ans.answer_e == null && ans.answer_f == null){
                question.innerHTML = "Q. " + ques;
                option_1.innerHTML = "a) " + ans.answer_a ;
                option_2.innerHTML = "b) " + ans.answer_b ;
                option_3.innerHTML = "c) " + ans.answer_c ;
                option_4.innerHTML = "d) " + ans.answer_d ;
                option_5.style.display = "none";
                option_6.style.display = "none";
                break 
            }
            else if(ans.answer_e == null){
                question.innerHTML = "Q. " + ques;
                option_1.innerHTML = "a) " + ans.answer_a ;
                option_2.innerHTML = "b) " + ans.answer_b ;
                option_3.innerHTML = "c) " + ans.answer_c ;
                option_4.innerHTML = "d) " + ans.answer_d ;
                option_5.style.display = "none";
                option_6.innerHTML = "f) " + ans.answer_f ;
                break 
            }
            else if(ans.answer_f == null){
                question.innerHTML = "Q. " + ques;
                option_1.innerHTML = "a) " + ans.answer_a ;
                option_2.innerHTML = "b) " + ans.answer_b ;
                option_3.innerHTML = "c) " + ans.answer_c ;
                option_4.innerHTML = "f) " + ans.answer_d ;
                option_5.innerHTML = "d) " + ans.answer_e ;
                option_6.style.display = "none";
                 break                
            }
            else{
                question.innerHTML = "Q. " + ques;
                option_1.innerHTML = "a) " + ans.answer_a ;
                option_2.innerHTML = "b) " + ans.answer_b ;
                option_3.innerHTML = "c) " + ans.answer_c ;
                option_4.innerHTML = "d) " + ans.answer_d ;
                option_5.innerHTML = "e) " + ans.answer_e ;
                option_6.innerHTML = "f) " + ans.answer_f ;
                break 
            } 
            }
            let correct_ans = data[0].correct_answer  
            console.log(correct_ans)
            const all_option = [option_1,option_2,option_3,option_4,option_5,option_6];
            for(let i = 0 ; i <all_option.length ; i++){
                all_option[i].addEventListener("click" ,()=>{
                  if(all_option[i].className == correct_ans || all_option[i] == null){
                    all_option[i].style.backgroundColor = "green";
                    location.reload()
                }
                })
            }   
}
    )        .catch((error)=> console.log(error))
    } 
main()