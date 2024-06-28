// i will add some logic to handlke the submit guess button, 
// create function to handle clicking the button and call it from the button , and test if it working by consol.log 
// then i need to store those form field values in react component state, let's call it inputField , setInputField
// we have to import useState from react,
// then hook this up in the input form 
// this will lead us to creat another function to handle the input field change and event
// then hook it up to the input field 

import { useState } from "react";
function InputForm() {
    const [inputField, setInputField] = useState("")
    const handleSubmit = () => {
        console.log('click') // --> to check if the button work, clicking work and it consol.log 'click' every time you press on the button.
        setInputField();
    };
    console.log(inputField)
    const handleInputFieldChange = (e) => {
        setInputField(e.target.value);
    };


    return (
        <div>
            <h3>input form</h3>
            <input onChange={handleInputFieldChange} value={inputField}  placeholder="Guess A Letter"></input>
            <button onClick={(handleSubmit)}>Submit Guess</button>
        </div>


    );
}


export default InputForm;

