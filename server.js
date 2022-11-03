console.log('Hello im from the server')
console.log(1 + 2)

// variabel
let hannah = 21
console.log('hannah1 ', hannah)

hannah = 22
console.log('hannah2 ', hannah)

// var skola = 'lnu'

// Objekt med en konstant
const person = { name: 'Hannah', surname: 'Obote', class: 'WP21', adress: {gata:'lnugatan 123', stad:'Kalmar'}}
console.log(person)

// Array
const listOfLang = ['html', 'javascript', 'csharp', 'cpp', 'typescript','basic', 'lisp','phyton', 'ruby', 'go']
console.log(listOfLang.slice(2,4))

// Funktioner
function hello () {
  return 'hello world'
}

// Arrow function
const hello2 = () => {

}

function addNumbers(x,y) { 
  return x + y
}

function subNumbers(x,y) { 
  return x - y
}

console.log(addNumbers(999,1))
console.log(subNumbers(10,11))

// felaktiga funktion, men kan fungera i alla fall
function subNumbers3(x=2,y=4) { 
  return x - y
}

console.log(subNumbers3())