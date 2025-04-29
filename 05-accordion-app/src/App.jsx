import { useState } from 'react'
import Question from './components/Question'
import data from "./components/data"


function App() {
  const [questions,setQuestions]=useState(data)
 
  return (
    <>
    <main>
      <div className='container'>
        <h3>questions and asnwers about login</h3>
      <section className='info'> 
      {questions.map((question)=>(
        <Question key={question.id} {...question} />
      ))}
     </section>
      </div>
     
    </main>
      
    </>
  )
}

export default App
