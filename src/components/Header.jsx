import "./Header.css";
import { Outlet, Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <h1>Zooh!</h1>
            <nav>
                <Link className="pageLink" to="/">Home</Link>
                <Link className="pageLink" to="/pageone">Page 1</Link>
            </nav>
            <button className="menuButton">=</button>
        </header>
    );
}

export default Header;