function receivesAFunction (callback){
    callback()
}
function returnsANamedFunction(){
    return function named(){
        console.log("The town is Nairobi.")
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("The town has no name.")
    }
}