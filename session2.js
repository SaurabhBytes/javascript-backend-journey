console.log("\n===Objects===")
let myfriend ={
    name: "Rahul",
    age: 25,
    hobby: "Coding"
};

console.log(myfriend.name);
console.log(myfriend.age);
console.log(myfriend.hobby);



console.log("Name : " + myfriend.name);
console.log("Age : " + myfriend.age);
console.log("Hobby : " + myfriend.hobby);


myfriend.hobby = "Boxing";
console.log("Name : " + myfriend.name);
console.log("Age : " + myfriend.age);
console.log("Hobby : " + myfriend.hobby);


console.log("\n  ===Arrays===")

let myfavourites = ['Pizza', 'Boxing','Gaming', 'Travel'];
console.log(myfavourites[0]);
console.log(myfavourites[1]);
console.log(myfavourites[2]);
console.log(myfavourites[3]);


myfavourites.push('Driving', 'Swimming');
console.log(myfavourites);
console.log(myfavourites.length);


myfavourites.pop();
console.log(myfavourites);
console.log(myfavourites.length);




console.log("\n=== Methods ===")
let numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function(num){
    console.log(num);
});


let tripled = numbers.map(function(num){
    return num * 3 ;
});
console.log(tripled);

let odds = numbers.filter(function(num){
    return num % 2 !== 0
});
console.log(odds);