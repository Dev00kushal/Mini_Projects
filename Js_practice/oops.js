// Object oriented programming  (Most important Topic)
//  OOPS means object oriented programming which means everything runs under object and class concept
// Whenever there is class and object understand it is oops in any language (Java,c.etc)
// A class is a template or a blueprint. for example while building a buliding we design blueprint for it
// A object is a buliding build form the blueprint 
// Every function inside the class is denoted as methods
// You dont need to put function inside of class since everything is already a method    
// While you see new keyword understand a object is being created form a class
// Whenever you created a object a constructor is automatically called
// A constructor is a method that is automatically called after the creation of object 
// If you return something inside a method you should be storing it in a object to catch it 

// Creation of class
class index_page{

}   

// Creation of class with constructor (Blueprint)
class User{
    constructor (firstName,LastName){
        this.firstName = firstName;
        this.LastName = LastName;
    }
    full_name(){
        console.log(this.firstName + " " + this.LastName)
    }
    
}

// Creation of object 
const Prevoius_User_Name = new User("Kushal","Chaulagin");
const Current_User_Name= new User("Dev","Kushal");

// Calling the methods form the object
Prevoius_User_Name.full_name()
Current_User_Name.full_name()
