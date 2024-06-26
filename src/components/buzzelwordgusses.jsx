// we create the component in the App.jsx 
// now let us make it real,
// we will pass buzzele that is going to determine what we show or what we hide 
// --> so we will take buzzle as prop
// what i actually want is controle over showing each letter
// we mainly want to use letter, so we will convert the buzzle into letters, that we need to use 




function BuzzelWordGuess({buzzle}) {
    const letters = buzzle.split('');
    console.log(letters)
    return (
        <div>
            <h3>Buzzel Word Guess</h3>
            <div>
                {letters.map((l, i) => <span className="text hide-text" key={i}>{l}</span>) } {/* <p>{buzzle}</p> */} 
                {/* in App.css we will create class for the span  */}
            </div>      
        </div>


    )
}


export default BuzzelWordGuess;

