let findTheOldest = function(arr) {
    let oldest = arr[0];
    let currentYear = 2021;
    for(let i = 0; i <= arr.length-2; i++){
        
        oldest = findOlder(oldest, arr[i+1], currentYear);
    }
    return oldest;
}

let findOlder = function(p1, p2, currentYear){
    let p1YOD;
    let p2YOD;
    if(typeof(p1.yearOfDeath)==="undefined"){
        p1YOD = currentYear;
    }
    else{
        p1YOD = p1.yearOfDeath;
    }
    if(typeof(p2.yearOfDeath)==="undefined"){
        p2YOD = currentYear;
    }
    else{
        p2YOD = p2.yearOfDeath;
    }
    let p1Age = p1YOD - p1.yearOfBirth;
    let p2Age = p2YOD - p2.yearOfBirth;
    if( p1Age > p2Age) {
        return p1;
    }
    else{
        return p2;
    }
}
/*const people = [
    {
      name: 'Carly',
      yearOfBirth: 1066,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ];
console.log(findTheOldest(people));*/

module.exports = findTheOldest
