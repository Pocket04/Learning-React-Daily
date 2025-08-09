import {Link} from "react-router-dom";


function NavBar() {

    return(
        <header style={{gap: "10px", display: "flex"}}>
            <Link to="/abt" >ABOUT</Link>
            <Link to="/" >HOME</Link>
            <Link to="/cont" >CONTACT</Link>
        </header>
    );
}
export default NavBar;