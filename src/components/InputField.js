import React from "react"
const InputField = () => {
    return( <div>
        <label>Enter your name:</label>
        <input type="text" />
        <button style={{color:"red",backgroundColor:"grey"}}>Submit</button>
        
        <label>Enter Last Name:</label>
        <input type="text" />
        <button style={{color:"green",backgroundColor:"grey"}}>Submit</button>
        </div>);
        
};

export default InputField;