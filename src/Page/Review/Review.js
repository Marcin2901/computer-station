import React from "react";
import "./Review.css";
import user1Img from "../../Images/review-user1.jpg";
import user2Img from "../../Images/review-user2.jpg";
import user3Img from "../../Images/review-user3.jpg";

const Review = () => {
    return (
        <section className="review" id="review">
            <h2 className="heading">customer's <span>review</span></h2>
            <div className="box--container">
                <div className="box">
                    <i className="fas fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab rem quam aut doloribus,
                    eos in suscipit odit iure minima expedita totam qui deleniti, iusto earum sed! Laudantium
                    iure praesentium cumque!
                    </p>
                    <img src={user1Img} alt="" className="user p-center"/>
                    <h3>Mike Blue</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="box">
                    <i className="fas fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab rem quam aut doloribus,
                    eos in suscipit odit iure minima expedita totam qui deleniti, iusto earum sed! Laudantium
                    iure praesentium cumque!
                    </p>
                    <img src={user2Img} alt="" className="user"/>
                    <h3>Sara Black</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="box">
                    <i className="fas fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab rem quam aut doloribus,
                    eos in suscipit odit iure minima expedita totam qui deleniti, iusto earum sed! Laudantium
                    iure praesentium cumque!
                    </p>
                    <img src={user3Img} alt="" className="user"/>
                    <h3>Mr. Green</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Review;