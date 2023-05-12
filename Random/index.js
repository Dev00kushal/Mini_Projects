//  Creating a Timer 
// pause 
// restart
// stop 
// Click event handler 
// Date obj

let Stop = document.querySelectorAll("button")[0]
let Start = document.querySelectorAll("button")[1]
const starter = () =>{
    let start_logic = () => {
        var clock1 = document.querySelector(" h1");
        let date = new Date()
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let Hours = date.getHours();
        clock1.innerHTML = Hours + ":" + minutes + ":" + seconds ;
    }
    setInterval(start_logic,0000);
}
const Stopper =  () => {
    let time = ()=>{
        var clock1 = document.querySelector(" h1");
        let date = new Date()
        let minutes = date.getMinutes() - date.getMinutes() ;
        let seconds = date.getSeconds()- date.getSeconds();
        let Hours = date.getHours()- date.getHours() ;
        clock1.innerHTML = Hours + ":" + minutes + ":" + seconds ;
    }
    setTimeout(time,0000);
}




Stop.addEventListener("click",Stopper)
Start.addEventListener("click",starter)


