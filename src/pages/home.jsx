import Card from "../components/card/Card";
import "./home.css";

function Home() {
    return(
        <div className="base">
            <Card title={"Map"} link={"/map"} />
            <Card title={"Buy Tickets"} link={"/pageone"} />
            <Card title={"Special Offers"} link={"/pageone"} />
            <Card title={"Fun Facts about Animals!"} link={"/pagetwo"} />
        </div>
    );
}

export default Home;