import {person, student1} from '../object.js'

let fruitList = ['kiwi', 'äpple', 'mango', 'apelsin', 'banan', 'ananas']
fruitList[2] = fruitList[2].concat(' juice')
let fruitText = 'apelsin'
let arr1 = []
let arr2 = []

// %
function oddOrEven(number){
  if (number % 2 === 0 ) {
    return 'Even'
  } else {
   return 'odd'
  }
}

oddOrEven(20)
console.log(Array.isArray(fruitText))

// for loop exempel
let numbers = [17, 26, 5, 2, 26, 5, 2, 26, 5, 2]

for (let i = 0; i < numbers.length; i++) {
  console.log(i+1,'. ', numbers[i])
}

// array metoder
console.log('length: ', numbers.length)
console.log('slice: ', numbers.slice(1,5))
numbers.push('lnu')
console.log('push: ', numbers)
numbers.pop()
console.log('pop: ', numbers)
numbers.shift()
console.log('shift: ', numbers)
numbers.unshift(2022)
console.log('unshift: ', numbers)

// undantag hantering
function evenNumbers(number){
  if (number % 2 === 0 ) {
    return 'Even'
  } else {
   throw new Error('Number must be even!!!!!!')
  }
}

// Resultat från  funktioner
// skriver ut valda element från en array.
console.log(evenNumbers(11))
console.log('here is your fruit list', fruitList[2], 'this is great', fruitList[5])
console.log(`Here is your fruit list ${fruitList} this is great! the fruit on position 2 ${fruitList[2]} is my best one`)

console.log(student1)