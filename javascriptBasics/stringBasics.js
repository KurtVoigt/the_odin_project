function chooseName(){
    let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
    let index = Math.floor(Math.random() * 8);
    console.log(index)
    return names[index];
}

console.log(chooseName())
console.log(chooseName())
console.log(chooseName())
console.log(chooseName())

function favoriteAnimal(animal="pig") {
    
    console.log(animal + " is my favorite animal!")
  }
  
  favoriteAnimal()