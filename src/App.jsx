import { useState } from 'react'
import './App.css'
import words from "./data/words.json"
import badGuesses from './components/badguesses'
import inputForm from './components/inputform'
import buzzelWordGuess from './components/buzzelwordgusses'


// to do :
// 1- buzzelwordgusses component
// 2- inputform
// 3- badguesses

function App() {
  
  console.log("possible words", words);
  return (
    <>

      <h1>HANGMAN</h1>

    </>
  )
}

export default App
