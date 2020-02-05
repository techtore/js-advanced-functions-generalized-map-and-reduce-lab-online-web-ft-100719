function map(myArray, myFunc){
    return myArray.map(arr => myFunc(arr));
}

//passes 1/2 of the tests
function reduce(myArray, startingPoint=nil){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } 
        else {
            return !!currentValue
        } 
    }
    return myArray.reduce(reducer, startingPoint)
}