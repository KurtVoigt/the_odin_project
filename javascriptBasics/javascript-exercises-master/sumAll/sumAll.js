const sumAll = function(num1, num2) {
    if(typeof(num1) != "number" || typeof(num2) !="number"){
        return "ERROR";
    }
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    let ret =0;
    if(num1 > num2){
        for(let i = num2; i <= num1; i++){
            ret = ret + i;
        }
    }
    if(num2 > num1){
        for(let i = num1; i <= num2; i++){
            ret = ret + i;
        }
    }

    return ret;
}

module.exports = sumAll
