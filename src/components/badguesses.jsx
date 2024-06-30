function BadGuess({badGuesses}) {
    return (
        <div>
            <h3>Bad Guess</h3>
            <p>{badGuesses.join(' ')}</p>
        </div>


    )
}


export default BadGuess;

