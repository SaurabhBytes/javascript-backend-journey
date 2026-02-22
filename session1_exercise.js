let friendname = "Rahul"
let friendage = 25
let friendhobby = "coding"

function introduce(friendname,friendage, friendhobby){
    return friendname + " is " + friendage + " years old and loves " + friendhobby

}

console.log("=== Friend Information === ")
console.log(friendname)
console.log(friendage)
console.log(friendhobby)

console.log("=== Description ===")
console.log(introduce(friendname,friendage,friendhobby))