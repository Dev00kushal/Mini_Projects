// By using the extends technique we create inheritance
// Child can use the properties and method of the parent(vice-versa cannot happen)
// Super method is used to call the constructor of the child class 

// Parent class
class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  
    student_details() {
      return this.grade + " " + this.name;
    }
  }
  
  const rollno_one = new Student("Kushal", 3.5);
  console.log(rollno_one.student_details());
  

  // Child Class 
  class StudentC1 extends Student {
    constructor(name, grade, rollno) {
      super(name, grade);
      this.rollno = rollno;
    }
  
    name_rollno_c1() {
      return this.name + " " + this.rollno;
    }
  }
  
  const c1_student = new StudentC1("Kushal", 3, 1);
  console.log(c1_student.student_details());
  console.log(c1_student.name_rollno_c1());
  
  // Parts you should really be focusing on (Very important| Note it down )

// On object creation
 const Obj_demo = new Student();

 // Method call (The thing after a dot is a method)
 Obj_demo.student_details();
 