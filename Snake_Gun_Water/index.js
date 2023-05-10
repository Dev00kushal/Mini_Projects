    // user press the button -> choose the snake,gun,water if similar to computer s,g,w -> win else -> select the times you want to try again then try again 

    
const on_press = () => {
    const user_confirmation = confirm("Do you really want to play this game")
    if(user_confirmation == true){
        alert("This is a Snake Water Game\nIn this game your are going to play with the computer and match the value Snake,Gun,Water.")
        const random_num = Math.floor(Math.random() * 3)
        let user = String(prompt("Snake/Gun/Water? ")).toLowerCase()
        const computer = ["snake","water","gun"];  
        const random_computer_move = computer[random_num];
        let input = document.querySelector("h1");
        if (user == random_computer_move){
        input.innerHTML ="You won man ! Congratulations";
        }
        else{
            input.innerHTML ="Try again";
            input.innerHTML = "Bad Luck"
        }
        let btn = document.querySelector("button");
        btn.innerHTML = "Play Again";
    }
    else{
        return false
    }
} 

