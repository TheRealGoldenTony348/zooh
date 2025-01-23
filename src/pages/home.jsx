import Card from "../components/card/Card";
import "./home.css";

function Home() {
    return(
        <div className="base">
            <Card title={"Map"} link={"/map"} />
            <Card title={"Ticket Kaufen"} link={"/pageone"} />
            <Card title={"Spezielle angebote"} link={"/pageone"} />
            <Card title={"Fakte über Tiere!"} link={"/pagetwo"} />
        </div>
    );
}

export default Home;