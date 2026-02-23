let numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function(num){
    console.log(num);
});

 let tripled = numbers.map(function(num){
    return num * 3;
});
console.log(tripled);



let evens = numbers.filter(function(num){
     return num % 2 === 0;
 });
 console.log(evens);


