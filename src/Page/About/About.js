import React from "react";
import "./About.css";
import aboutImg from "../../Images/about-img.jpg";

const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="heading"><span>about</span> us</h2>

            <div className="row">
                <div className="image">
                    <img src={aboutImg} alt="laptops"/>    
                </div>
                <div className="about__content">
                    <h3>What makes our products better?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab rem quam aut doloribus,
                       eos in suscipit odit iure minima expedita totam qui deleniti, iusto earum sed! Laudantium
                       iure praesentium cumque!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor amet tenetur excepturi
                       iusto repellat assumenda quas qui? Soluta, explicabo quod.
                    </p>
                    <a href="#" className="btn">Learn more</a>
                </div>
            </div>
        </section>
    )
}

export default About;