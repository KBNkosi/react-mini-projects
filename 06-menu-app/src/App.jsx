import { useState } from 'react'
import Categories from './components/Categories'
import Menu from './components/Menu'
import data from './components/data'

function App() {
  
console.log(data)
  return (
    <>
     <Categories/>
     <Menu/>
    </>
  )
}

export default App
