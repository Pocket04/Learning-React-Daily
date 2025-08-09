import '/src/styles/SignInForm.css'
import {useState} from "react";

function SignInForm() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [passError, setPassError] = useState("");

    function handleChangeUserName(event){
        setUserName(event.target.value);
        if(userName.length < 6){
            setNameError("Username can't be less than 6 symbols.")
        }else {
            setNameError("");
        }
    }
    function handleChangePassword(event){
        setPassword(event.target.value);
        if(password.length < 6){
            setPassError("Password can't be less than 6 symbols.")
        }else {
            setPassError("");
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(userName)
        alert(password)
    }
    return(
        <form className="signin-form" onSubmit={handleSubmit}>
            <label htmlFor="userName">Username: </label>
            <input id="userName"
                   type="text"
                   placeholder="Username..."
                   value={userName}
                   onChange={handleChangeUserName}
                   required
            />
            {nameError && <p>{nameError}</p>}
            <br/>
            <label htmlFor="password">Password: </label>
            <input
                    id="password"
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={handleChangePassword}
                    autoComplete="current-password"
                    required
            />
            {passError && <p>{passError}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}

export default SignInForm;