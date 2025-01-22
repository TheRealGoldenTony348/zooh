import Card from "../components/card/Card";
import "./home.css";

function Home() {
    return(
        <div className="base">
            <Card title={"Map"}></Card>
            <Card title={"Page 1"}></Card>
            <Card title={"Page 2"}></Card>
            <Card title={"Ticket"}></Card>
        </div>
    );
}

export default Home;