import "./Card.css";

function Card(props) {
    let title = props.title;
    return(
        <div className="baseBox">
            <h3>{title}</h3>
        </div>
    );
}

export default Card;