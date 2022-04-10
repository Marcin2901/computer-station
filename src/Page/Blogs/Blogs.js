import React from "react";
import "./Blogs.css";
import blogImg1 from "../../Images/blogs-img1.jpg";
import blogImg2 from "../../Images/blogs-img2.jpg";
import blogImg3 from "../../Images/blogs-img3.jpg";

const Blogs = () => {
    return ( 
        <section className="blogs" id="blogs">
            <h2 className="heading">Our <span>blogs</span></h2>
            <div className="box--container">

                <div className="box">
                    <div className="image">
                        <img src={blogImg1} alt="blog" />
                    </div>
                    <div className="blogs-box--content">
                        <a href="#" className="title">Micro Blog</a>
                        <span>by admin / 7st april 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, magni.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={blogImg2} alt="blog" />
                    </div>
                    <div className="blogs-box--content">
                        <a href="#" className="title">PC Perspective</a>
                        <span>by admin / 21st may 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, magni.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={blogImg3} alt="blog" />
                    </div>
                    <div className="blogs-box--content">
                        <a href="#" className="title">Hot Hardware</a>
                        <span>by admin / 29st january 2022</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, magni.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Blogs;