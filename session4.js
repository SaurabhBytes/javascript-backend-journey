// all function first
function fetchuserdata(){
    return new Promise(function(resolve,reject){
setTimeout (function(){
    resolve({ name: "Saurabh", age: 21})
}, 4000)
    })
}

async function displayuser(){
    try{
        console.log("Fetching User....")
        let user = await fetchuserdata()
        console.log(user)
        console.log("Done")
    } catch (error){
        console.log("Error", error)
    }
}


function fetchProductData (){
    return new Promise(function(resolve,reject){
        setTimeout (function(){
            resolve({ product: "Laptop", price: 50000, inStock: true })
        }, 5000)
    })
}


async function displayproductdata() {
    try{
        console.log("Loading Product...")
        let user = await fetchProductData()
        console.log(user)
        console.log("Product Loaded")
    }catch (error){
        console.log("Error", error)
    }
}

 // Async function that runs everything in order
async function runAll() {
    console.log("===Promise With Then===")
await new Promise (function(resolve,reject){
setTimeout (function(){
    resolve ("Hello");
    }, 3000)
    }).then(function(data){
    console.log(data)
    })
    console.log("\n===Async/Await===")
 await displayuser();

console.log("\n===Exercise===")
await displayproductdata()
}



   

runAll();










