import FactCard from "../components/fact-card/FactCard";
import "./page2.css";

function PageTwo() {
    return(
        <div className="basePageTwo">
            <FactCard text={"Polar bears have black skin!"} />
            <FactCard text={"Octopuses have three hearts!"} />

            <FactCard text={"Girrafes pick their noses!"} />
            <FactCard text={"Elephants can run pretty fast!"} />

            <FactCard text={"Blue whales are immensely heavy!"} />
            <FactCard text={"Koalas sleep almost all-day!"} />

            <FactCard text={"Cows have best friends!"} />
            <FactCard text={"Otters have the world's thickest coat!"} />
        </div>
    )
}

export default PageTwo;