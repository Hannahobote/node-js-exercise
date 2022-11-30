
function createName() {
  dispatchEvent(new window.CustomEvent('nickNameCreated', { detail: { name: 'john doe' } }))
}


addEventListener('nickNameCreated', evt => {
  let username = evt.detail.name
})

function score() {
  // så fort spelet avslutas, kasta ett event som visar antallet score
  let dynamicScore = 10
  dispatchEvent(new window.CustomEvent('score', { detail: { score: dynamicScore } }))
}

addEventListener('score', evt => {
  let score = evt.detail.score
})

async function getNextQuestion() {
  // fetcha frågan 
  // finns time limit?
  // finns det alternatives ?
    // visa knappar
    //tilldela vädre till knappar

  // svara på frågan 

  const userAnswer = 65513
  const result = await fetch('https://courselab.lnu.se/quiz/question/1', body)
  const data =  await result.json()
  console.log(data)

  const nextURL = data.nextURL
  const body = {answer: userAnswer}

  postQuestion(answer, nextURL)
}


async function postQuestion(answer, nextURL) {
  // skicka svaret till serven
  // om svaret var rätt, så kallade jag next question
  const answer = await fetch(nextURL, {
    method: 'POST', 
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
  const answerResult =  await answer.json()
  console.log(answerResult)

  if(answer) {
    // display msg
    getNextQuestion()
    questionFinished = 'nextURL' in res === false
    // eller
    questionFinished = 113

    if(questionFinished) {
      userFinished()
    }
  
  } else {
    userLost()
  }

}

function userLost() {

}

function userfinished() {

}