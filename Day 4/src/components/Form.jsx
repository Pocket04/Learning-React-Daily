import {useState} from 'react';
import '../styles/Form.css'


function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    function handleButtonSubmit(){
        alert("Your email is: " + email + ". Your password is: " + password)
    }

    return(
        <div className="form">
            <p>Sign In</p>
            <input type="text" onChange={handleEmailChange} value={email} placeholder="Email..." />
            <input type="password" onChange={handlePasswordChange} value={password} placeholder="Password..."/>
            <button type="submit"onClick={handleButtonSubmit}>Submit</button>
        </div>
    );
}


export default Form;