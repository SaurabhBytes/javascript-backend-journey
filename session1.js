let myName = "Saurabh"
let myAge=(22)
let myCollege = "LCIT"

console.log("===Variables ===");
console.log (myName)
console.log(myAge)
console.log(myCollege)



 console.log("\n === Text with variables===")
 console.log("My name is " + myName)
 console.log("My age is " + myAge)
 console.log("I study at "+ myCollege)


 console.log("\n=== Function Output ")
 function describe(name,age,college){
    return name + " is " + age + " years old and studies at " + college
 }

 console.log(describe("Saurabh", 22 , "LCIT"))