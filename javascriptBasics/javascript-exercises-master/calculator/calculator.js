function add (num1, num2) {
	return num1+num2;
}

function subtract (num1, num2) {
	return num1-num2;
}

function sum (arr) {
	let ret=0;
	for(let i=0; i < arr.length; i++){
		ret = ret + arr[i];
	}
	return ret;
}

function multiply (arr) {
	if(arr.length === 0){
		return "empty array"
	}
	let ret=arr[0];
	for(let i=1; i < arr.length; i++){
		ret = ret * arr[i];
	}
	return ret;
}

function power(num, exp) {
	let ret = num;
	for(let i=0; i < exp-1; i++){
		ret = ret*num;
	}
	return ret;
}

function factorial(num) {
	if(num===0){
		return 1;
	}
	for(let i = num-1; i > 0; i-- ){
		num = num*i;
	}
	return num
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}