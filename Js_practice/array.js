 // Array is used to get the data from the server side.
 // Best practice to make and Array is by using const 
 // Even by apply const the array will never become constant

 const following = ["Virat Kholi","Magnus Carslen","Elon Musk","Sam Altman"]
 console.log("You are following",following.length,"people on twitter.")

 // Nested Array in a object  
const student = [
    {
    Name : "Kushal",
    class : "Bachelors",
    Grade : 3.6,
    pass : true,
    Student_id : 12121,
},
    {
    Name : "Ojax",
    class : "Bachelors",
    Grade : 2.5,
    Student_id : 2343,
    pass : false,
},
]
console.log(student[0].Name)

const display_required_stud = () => {
    for(let i =  0;i<student.length;i++){
        console.log(student[i])
    }
}
display_required_stud()

// Methods of Array 
let Aboard_Colleges_in_Nepal = ["Herald College Kathmandu","IST College","Islingtion College","Nami College","Dibya gyan college","KMC"]

// Removes the element form the back 
let KMC_poped  = Aboard_Colleges_in_Nepal.pop() 
let DGC_poped  = Aboard_Colleges_in_Nepal.pop()
console.log(Aboard_Colleges_in_Nepal)

// Add the element form the last
let Rohan_college = Aboard_Colleges_in_Nepal.push("Softwarica")
console.log(Aboard_Colleges_in_Nepal)

//slice (removing in index)
 let unliked_college = Aboard_Colleges_in_Nepal.slice(1,2)
console.log(unliked_college)

// Sorting method (chronological order)
let Alphabets = ["F","E","D","C","B","A"]
let sorted_array = Alphabets.sort()
console.log(sorted_array)

// Copying Array
let choring_array = division_by_2.copyWithin();
console.log(choring_array)

// Reverse 
let stud_rank = ["Abhishek","Roman","Dibhiya","Kritish","Aryan","Kushal"]
let all_student_rank = stud_rank.reverse()
console.log(all_student_rank)

// Acessing all the elements through loop
const stud_rank_all_elements = () => {
    for (element in stud_rank){
        console.log(stud_rank[element])
    } 
}
stud_rank_all_elements()
// for each loop
stud_rank.forEach(function (value,index,array){
 console.log(value)

})
