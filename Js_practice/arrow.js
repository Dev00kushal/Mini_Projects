// Normal function 
function splash_screen(){
  console.log("Hello Hacker this system is secured so back off!!")
}
splash_screen()

//Arrow function 

const  server_side = ()=>{
    console.log("Yes it is secured")
}
server_side()

// Create a multiplication table of 3 using the arrow function 

const multi = (num) => {
     let i = 1
    while(i<=10){
        console.log(num,"*",i,"=",num*i)
        i++
    }
}
multi(3) 

let Age = undefined ;
const Year_of_Birth = (Age) => {
    const formula = 2023 - Age;
    console.log("You were born at the year of",formula)
    return Age
}
Year_of_Birth(19)
