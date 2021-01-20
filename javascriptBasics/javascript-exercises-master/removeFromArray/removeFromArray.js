const removeFromArray = function() {
    arr = arguments[0];

    if(arguments.length>=2){
        for(let i = 1; i < arguments.length; i++){

            while(arr.indexOf(arguments[i]) > -1 ){
                arr.splice(arr.indexOf(arguments[i]), 1);
                
            }
        }
    }
    return arr;
}

module.exports = removeFromArray
