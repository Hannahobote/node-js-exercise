import fetch from 'node-fetch'

async function getData() {
  // Är en GET per default
  // const response = await fetch('https://api.publicapis.org/entries', {method: 'GET'});
  const result = await fetch('https://courselab.lnu.se/quiz/question/1')
  const data =  await result.json()
  console.log(data)

  const nextURL = data.nextURL
  const body = {answer: '1'}
  const answer = await fetch(nextURL, {
    method: 'POST', 
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
  const answerResult =  await answer.json()
  console.log(answerResult)
  
}

await getData()