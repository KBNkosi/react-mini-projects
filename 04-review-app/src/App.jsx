import { useState } from 'react'
import Review from './Components/Review'


function App() {


  return (
    <main>
      <section className='container'>
        <div className='title'>
        <h2>our reviews</h2>
        <div className='underline'></div>
        </div>
        <Review />
      </section>
      
    </main>
  )
}

export default App
