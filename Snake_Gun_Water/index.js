    // user press the button -> choose the snake,gun,water if similar to computer s,g,w -> win else -> select the times you want to try again then try again 

    
const on_press = () => {
    const user_confirmation = confirm("Do you really want to play this game")
    if(user_confirmation == true){
        alert("This is a Snake Water Game\nIn this game your are going to play with the computer and match the value Snake,Gun,Water.")
        const random_num = Math.floor(Math.random() * 3)
        let user = String(prompt("Snake/Gun/Water? ")).toLowerCase()
        const computer = ["snake","water","gun"];  
        const random_computer_move = computer[random_num];
        const upper = random_computer_move.toUpperCase();
        let input = document.querySelector("h1");
        if (user == computer[0] && random_computer_move == computer[1]){
        input.innerHTML ="You won man ! Congratulations " + upper;
        }
        else if(user == computer[1] && random_computer_move == computer[2]){
            input.innerHTML ="You won man ! Congratulations " + upper;
        }
        else if(user == computer[2] && random_computer_move == computer[0]){
            input.innerHTML ="You won man ! Congratulations " + upper;
        }
        else if(user == random_computer_move){
            input.innerHTML ="Oh no ! It is a Draw";
        }
        else{
            input.innerHTML ="Try again";
            input.innerHTML = "Bad Luck -> " + upper;
        }
        let btn = document.querySelector("button");
        btn.innerHTML = "Play Again";
    }
    else{
        return false
    }
} 

