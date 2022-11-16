import fetch from 'node-fetch'

let animals = ['katt', 'hund', 'björn', 'lejon']
let numbers = [1,2,3,4,5]
const length = numbers.length // = 5

console.log(numbers[4])
// 0. 1
// 1. 2
// 2. 3
// 3. 4
// 4. 5
// 5. undefined

/*for(let index = arr1; index > 0; index--) {
      console.log(animals[index-1])
}*/

/*let counter = -1
do {
  counter++
  console.log(animals[counter])
} while (counter < arr1)*/


// async await
async function getData() {
  // Är en GET per default
  // const response = await fetch('https://api.publicapis.org/entries', {method: 'GET'});
  const result = await fetch('https://api.publicapis.org/entries')
  const data =  await result.json()
  console.log(data)
}

// getData()

async function postData() {
  // lägg till infomation  med en body --- body {....}
  const response = await fetch('https://api.publicapis.org/entries', {method: 'POST'});
  const data = await response.json();
  console.log(data);
}

postData()