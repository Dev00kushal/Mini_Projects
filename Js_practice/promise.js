// Very important topic in javascript 
// resolve and reject are call back 
// This is used while calling the API
// To call the data form the server side we use API 
// fetch is also a promise 
// Fetch returns the promise
// There are states in a promise :
    // Reslove
    // Pending 
    // Reject


// Producing the promise
let my_promise = new Promise((resolve,reject) => {
    
let x = 1;
if (x==0){
    resolve("Completed");
}
else{
    reject("Denied");
}
})

// Consuming the promise
my_promise.then((res)=> {
  console.log(res);
}).catch((error)=> {
  console.log(error);
})

// Fetch 
fetch("https://www.nepalpolice.gov.np/").then(
    (accesed) => {
       console.log("The data has been sucessfully acessed")
    }
).catch((error)=>
{
    console.log("The data is not acessed")
})

const tut = () => {
    return new Promise((resolve,reject)=> {
        let hover_time = 3
        if (hover_time == 3){
            resolve("ok");
        }
        else{
            reject("Not available");
        }
    })
}
tut().then((res)=>{
   console.log(res);
}).catch((err)=>{
    console.log(err);
})