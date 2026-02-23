let myfavouritemovie = {
    title : 'Inception',
    year : 2010,
    rating : 8.8,
    genre : 'Sci -fi'
}

console.log("===My Favourite Movie===")
console.log(myfavouritemovie.title);
console.log(myfavouritemovie.year);
console.log(myfavouritemovie.rating);
console.log(myfavouritemovie.genre);
console.log("\n")


let movierating = [8.5, 7.2, 9.1, 6.8, 8.9];

console.log("===Ratings===");
movierating.forEach(function(num){
    console.log(num);
});

let rounded = movierating.map(function(num){
    return Math.ceil(num);
});
console.log(rounded);

let filtering = movierating.filter(function(num){
    return num > 8;
});
console.log(filtering);