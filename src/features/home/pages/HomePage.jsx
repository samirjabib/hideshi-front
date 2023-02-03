
import {  Hero, CategoriesList } from "../components";

export const Home = ({props ="1"}) => {
    
    return (
        <section className="scroll-smooth">
            <Hero/>
                <CategoriesList/>
        </section>
    );
};

