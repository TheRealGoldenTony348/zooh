import Ticket from "../components/ticket/Ticket";

function PageOne() {
    return(
        <div>
            <div>
                <Ticket title={"Ticket 1"} price={"10 CHF"} description={"default description 1"} />
                <Ticket title={"Ticket 2"} price={"15 CHF"} description={"default description 2"} />
                <Ticket title={"Ticket 3"} price={"20 CHF"} description={"default description 3"} />
                <Ticket title={"Ticket 4"} price={"25 CHF"} description={"default description 4"} />
            </div>
            
        </div>
    )
}

export default PageOne;