// we create the component in the App.jsx 
// now let us make it real,
// we will pass buzzele that is going to determine what we show or what we hide 
// --> so we will take buzzle as prop
// what i actually want is controle over showing each letter
// we mainly want to use letter, so we will convert the buzzle into letters, that we need to use 




function BuzzelWordGuess({buzzle}) {
    // const letters = buzzle.split('');
    // const letters = buzzle.split('').map(l => {l});
    // const letters = buzzle.split('').map(l => ({char: l, show: true}));
    const letters = buzzle.split('').map(l => ({char: l, show: false}));
    // Mapping over the array: The map() function is then used to transform each character of the array. 
    // Each character l is converted into an object with two properties:
    // char: This holds the actual character.
    // show: This is a boolean value initially set to true.
    // [{char: 'h', show: true}]


    console.log(letters)
    return (
        <div>
            <h3>Buzzel Word Guess</h3>
            <div>
                {/* {letters.map((l, i) => <span className="text hide-text" key={i}>{l}</span>) }  */}
                {letters.map((l, i) => <span className={l.show ? "text" : "text hide-text"} key={i}>{l.char}</span>) } {/* <p>{buzzle}</p> */} 
                {/* in App.css we will create class for the span to decorate the letter to be underline and could be hidden */}
                {/* now we need to figure out how to handle each letter of the buzzle as an individual element that can be controlled—specifically, 
                whether it is shown or hidden when we pass the guesses,  */}
                {/* to do that we need to turn it into object "dictitionary", so, back to my letters and map over this array of string  */}
                {/* after we turn const letters into array of objects and irerate over each object we will render each character {l.char} */}
                {/* then do the javascript part --> tag template literal and do i show ? className={`l.show ? "text"`} if l.show is true will return text if false will hide it */}
                {/* then back to letters and set it to false by default  */}
                {/* now i can hide and show individual letter */}
                {/* next step is passing in the letters the user has guesed  */}



            </div>      
        </div>


    )
}


export default BuzzelWordGuess;

