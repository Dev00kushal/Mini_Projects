// Block scoped 
function Employe_salary(){
 let working_hour = 8;
 let per_hour_rate = 1000;
 let Bonus = 25000;
 let work_leave = 10;
 let Salary = working_hour * per_hour_rate + Bonus - work_leave;
 return Salary
}
console.log(Employe_salary())

let Age = 3;

Age_Infant : Age ? Age >0 && Age <=12 :"Infant";
Age_Teenager : Age ? Age >=13 && Age <=19 :"Teenager";
Age_adult : Age? Age >=20 && Age <=40 : "ADULT"
Age_old : Age? Age >=40 : "OLD"

 let sum = 0;
for (let i = 0;i<10;i++){
    sum += i;
}
console.log(sum);

function sum_of_num(a,b){
    let a,b = undefined;
    return a+b;
}

