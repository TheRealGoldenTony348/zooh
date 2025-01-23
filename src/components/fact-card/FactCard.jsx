import "./FactCard.css"

function FactCard(props) {
    let text = props.text;

    return(
        <div className="baseFactCard">
            <h4>{text}</h4>
        </div>
    );
}

export default FactCard;