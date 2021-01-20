const caesar = function(text, shift) {
    let caesarString = "";
    for(let i = 0; i < text.length; i++){
        caesarString=caesarString+incrementChar(text[i], shift);
    }
    return caesarString;
}

 incrementChar = function(char, shift){
     if(shift === 0){
         return char;
     }
    let charCode = char.charCodeAt(0);
    //check to see if unicode value is an english char
    if((charCode > 96 && charCode < 123) || (charCode > 64 && charCode < 91)){
        //for decrypting with negative values
        while(shift < 0){
            shift = shift + 26;
        }
        //capital letter 
        if(charCode > 96){
            return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }
        else{
            return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        }
    }
    else{
        return char;
    }
}

module.exports = caesar;
//console.log(caesar('Hello, World!', -29));