function callBack(){
    console.log("I am  A callback function")
}
function receivesAFunction(callBack){
callBack()
}
function returnsANamedFunction(){
    return callBack
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("hello")
    }
}