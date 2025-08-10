import {Link} from "react-router-dom";
import '../styles/NavBar.css'
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";


function NavBar(){
    const {user} = useContext(UserContext);


    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact us</Link>
            <div className="user-info">
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
            </div>
        </nav>
    );
}

export default NavBar;