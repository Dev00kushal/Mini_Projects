// Declear object with const keyword

// Object 
const employee = 
{
    // Properties
    Name : "Kushal",
    Caste : "Chaulagain",
    GPA : 3.58,
    Weight : 60,
    location : "Boudha",
    
    full_name : function (){
        return this.Name + "    " + this.Caste
    }
}
console.log(employee["location"])
console.log(employee.full_name())
