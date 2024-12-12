import "./Header.css";
import { Outlet, Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <h1>Zooh!</h1>
            <nav>

                    <Link to="/">Home</Link>


                    <Link to="/pageone">Page 1</Link>

            </nav>
        </header>
    );
}

export default Header;