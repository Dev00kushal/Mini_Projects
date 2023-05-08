// Very important topic 

const login = (username) => {
    return new Promise((resolve,reject)=>{
console.log("Login is sucessfull");
   if (username != "KUSHAL CHAULAGAIN"){
       reject("Username not matched")
}
else{
       resolve("Welcome to the dashboard ",username);
   }
   return username
    }
    )
}

// Code if async-await didnot exist 
const Bank_balance = (balance) => {
    return new Promise((resolve,reject)=>{
        console.log("Display data");
        resolve(balance);
        reject("Sorry not display");
    })
}

login("KUSHAL CHAULAGAIN").then( (data) => {
     console.log(data);
     Bank_balance(data).then((res)=> {
        console.log(res)
     })
}
).catch(
   (err) => {
    console.log(err)
   }
)


// async-await 
const getCookieData = async () => {
    try{
        const data = await login("Kushal  Hamal");
        const res  = await Bank_balance(data);
        console.log(res) 
    }
    catch{
        console.log("Not found the username")
    }
  }
  
getCookieData()
  