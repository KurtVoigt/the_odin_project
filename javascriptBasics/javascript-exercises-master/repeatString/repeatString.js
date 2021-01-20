const repeatString = function(string, repeat) {
    let loopVal = parseInt(repeat);
    console.log(loopVal);
    let ret = "";
    if (loopVal < 0){
        return "ERROR";
    } 
    for(let i = loopVal; i > 0; i--){
        
        ret = ret + string;
    }
    return ret;
}

//console.log(repeatString("hey", 3))
module.exports = repeatString
