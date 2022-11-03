const person = {
  name:'test',
  getName: function() {
    return this.name
  },
  setName: function(newName) {
    this.name = newName
    return `your name has been changed to ${newName}`
  }
}

const cat = {
  name: 'nisse', 
  legs: 4,
  tail: 1
}

class PersonClass {

  constructor() {
    this._name = ''
  }

  getName () {
    return this._name
  } 

  setName (newName) {
    this._name = newName
    return `your name has been changed to ${newName}`
  }
}

console.log(`Hello 
my first name is ${person.name} and my surname is ${person.surname}
Goodbye!
`)

const student1 = new PersonClass()
const student2 = new PersonClass()

console.log(Object.keys(cat))
console.log(Object.values(cat))

const summary = {
  average: average(),
}

function average() {
  return 'hello'
}
console.log(summary)

export {person, student1}