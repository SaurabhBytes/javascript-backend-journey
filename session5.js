console.log("=== Destructuring Objects ===")
// Section 1 code

let student = {name: "Saurabh", age: 21, college: "LCIT", gpa: 6.5};
let {name,age,college,gpa}= student;

console.log(name)
console.log(college)
console.log(age)
console.log(gpa)


console.log("\n=== Destructuring Arrays + Spread ===")
// Section 2 code

let fruits = ["apple", "banana", "orange"];
let [first,second,third]= fruits;

let morefruits = [...fruits, "grape"];
console.log(first);
console.log(second)
console.log(morefruits)


console.log("\n=== Merge + Destructure ===")
// Section 3 code

let movie = { title: "Inception", rating: 8.8, year: 2010 };
let movieInfo = { director: "Nolan", genre: "Sci-Fi" };

let completeMovie = { ...movie, ...movieInfo};
let {director,genre,rating,year,title}= completeMovie;
console.log(title);
console.log(rating);
console.log(director)


