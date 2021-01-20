const fibonacci = function(num) {
    if(typeof(num)==="string"){
        num = parseInt(num);
    }

    if(num < 0){
        return "OOPS";
    }
    
    fibArr = new Array(num+2);
    fibArr[0] = 0;
    fibArr[1] = 1;

    for(let i = 2; i <= num; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr[num];
}

module.exports = fibonacci
