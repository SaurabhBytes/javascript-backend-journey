function fetchmoviedata(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({ title: "Inception", rating: 8.8, year: 2010 });
        }, 2000)
    })
}

async function displaymoviedata() {
    try{
        console.log("Loading Movie...")
        let user = await fetchmoviedata()
        console.log(user)
    }catch (error){
        console.log("Error", error)
    }
    
}


function fetchmoviereviews(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve( ["Amazing", "Mind-bending", "Masterpiece"]);
        }, 3000)
    })
}

async function displaymoviereviews() {
    try{
        let user = await fetchmoviereviews()
        console.log(user)
        console.log("Movie Loaded")
    }catch (error){
        console.log("Error", error)
    }
    
}


// async function 

async function runMovieApp(){

    await displaymoviedata();
    await displaymoviereviews();
}

runMovieApp();



