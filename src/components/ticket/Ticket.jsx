import "./Ticket.css"

function Ticket(props) {
    let title = props.title;
    let price = props.price;
    let description = props.description;

    return (
        <>
            <div className="baseTicket">
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                
                <h3>
                    {price}
                </h3>
            </div>
        </>
    );
}

export default Ticket;