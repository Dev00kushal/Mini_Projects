// Map returns a new Array 
// We use map to perform a operation in a Array and store it into a new Array form 
// While doing this nothing will happen to the previous array

// Login Status check 
const login_status = [true,false,true,false,true,false,true];
const login_status_jan = login_status.map(function(value) {
  if (value == true) {
    return "Present";
  } else {
    return "Absent";
  }
});
console.log(login_status_jan)