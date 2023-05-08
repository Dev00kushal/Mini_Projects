const Jokes = ["Why don't scientists trust atoms? Because they make up everything.","I told my wife she was drawing her eyebrows too high. She looked surprised.","I'm reading a book on the history of glue - I just can't seem to put it down."]
const jokes_api = fetch("https://v2.jokeapi.dev/joke/Dark");
jokes_api.then((joke)=>{
    return joke.text()
}).then((jokes)=>{
    console.log(jokes);
})
const on_press = () => {
    const randomInt = Math.floor(Math.random()*Jokes.length)
    const current_joke = document.querySelector("h1")
    console.log(randomInt)
    current_joke.innerText =  Jokes[randomInt];
}