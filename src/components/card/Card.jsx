import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
    let title = props.title;
    let link = props.link;
    return(
        <Link className="baseBox" to={link}>
            <h3>{title}</h3>
        </Link>
    );
}

export default Card;