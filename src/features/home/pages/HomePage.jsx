import React from "react";
import { CategoriesList, Hero } from "../components";



export const Home = () => {
    return (
        <section className="scroll-smooth">
            <Hero/>
            <CategoriesList/>
        </section>
    );
};

