import { useEffect, useState  } from 'react'
// import { useState } from 'react'
import './App.css'
import words from "./data/words.json"
import BadGuess from './components/badguesses'
import InputForm from './components/inputform'
import BuzzelWordGuess from './components/buzzelwordgusses'


// to do :
// 1- buzzelwordgusses component
// --> after creating this component,let us make it real,
// 2- inputform
// 3- badguesses

function App() {
  const [badGuesses, setBadGuesses] = useState([]); // track bad guesses
  //back to read me, secend requirement, i need to have guess letters,
  // so we will create the second component state for the guessed letter
  const [guessedLetters, setGuesedLetters] = useState([]);// empty array, the initial state when we start the game 
  // now guessedLetters will be passed into a prop in buzzleWordGuess
  const [buzzle, setBuzzle] = useState(""); // we can leave it empty or null by default 
  // it is better to make it same type, so js return empty string as false so we can check
  // if the buzzle word has been created or not
  console.log("possible words", words);
  const getRandomWord = () => words[Math.floor(Math.random() * words.length)];
  // make sure you get only one random word every time this component rander
  // so, we will utilize useEffect "it controle when stuff happen and let react know that happening"
  useEffect (() => {
      console.log("useEffect running")
      const wordToGuess = getRandomWord();
      console.log("word to guess:", wordToGuess);
      setBuzzle(wordToGuess);
    }, []);
  const handleGuessedLetter = (guess) => {
      // Helper function to check if an array contains a letter
  const contains = (array, letter) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === letter) {
        return true;
      }
    }
    return false;
  };

  // Check if the letter has already been guessed
  if (contains(guessedLetters, guess) || contains(badGuesses, guess)) {
    alert('You already guessed that letter!');
    return;
  }

  // Add the guessed letter to the appropriate array
  if (contains(buzzle.split(''), guess)) {
    setGuesedLetters([...guessedLetters, guess]);
  } else {
    const newBadGuesses = [...badGuesses, guess];
    setBadGuesses(newBadGuesses);

    // Check if the player has made 6 or more bad guesses
    if (newBadGuesses.length >= 6) {
      alert('Game Over!');
    }
  }
  }
  return (
    <>

      <h1>HANGMAN</h1>
      <p>{buzzle}</p> 
      <BuzzelWordGuess buzzle={buzzle} guessedletters={guessedLetters} />  
      {/* we added here prop "buzzle" to pass a data from a parent component in the component hierarchy. */}
      <InputForm handleGuessedLetter={handleGuessedLetter}/>
      <BadGuess badGuesses={badGuesses}/>

    </>
  )
}

export default App
