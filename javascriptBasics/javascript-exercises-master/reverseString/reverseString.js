const reverseString = function(string) {
    let ret = "";
    for(let i = string.length-1; i>=0; i--){
        ret = ret + string[i];
    }

    return ret;
}

module.exports = reverseString
