import React from "react";
import "./Menu.css";
import {Link} from "react-router-dom";
import processorImg from "../../Images/menu-processor.jpg";
import accessoriesImg from "../../Images/menu-accessories.png";
import caseImg from "../../Images/menu-case.jpg";
import graphicsCardImg from "../../Images/menu-graphicsCard.jpg";
import hardDriveImg from "../../Images/menu-hardDrive.jpg";
import motherboardImg from "../../Images/menu-motherboard.jpg";
import ramImg from "../../Images/menu-ram.jpg";
import chargerImg from "../../Images/menu-charger.jpg";

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <h2 className="heading">components <span>Menu</span></h2>

            <div className="box--container">
                <div className="box">
                    <img src={processorImg} className="image" alt="processor"/>
                    <div className="menu__content">
                        <h3>Procesors</h3> 
                        <p>to see the list of available devices, click the button below</p>
                        <Link to={"/processors"} className="btn">See all products</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={motherboardImg} className="image" alt="processor"/>
                    <div className="menu__content">
                        <h3>Motherboard</h3> 
                        <p>to see the list of available devices, click the button below</p>
                        <Link to={"/motherboards"} className="btn">See all products</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={ramImg} className="image" alt="processor"/>
                    <div className="menu__content">
                        <h3>Ram Memory</h3> 
                        <p>to see the list of available devices, click the button below</p>
                        <Link to={"/ram"} className="btn">See all products</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={hardDriveImg} className="image" alt="processor"/>
                    <div className="menu__content">
                        <h3>Hard Disk</h3> 
                        <p>to see the list of available devices, click the button below</p>
                        <Link to={"/hardDisks"} className="btn">See all products</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={graphicsCardImg} className="image" alt="processor"/>
                    <div className="menu__content">
                        <h3>Graphics Cards</h3> 
                        <p>to see the list of available devices, click the button below</p>
                        <Link to={"/graphics"} className="btn">See all products</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={chargerImg} className="image" alt="processor"/>
                    <div className="menu__content">
                        <h3>Chargers</h3> 
                        <p>to see the list of available devices, click the button below</p>
                        <Link to={"/chargers"} className="btn">See all products</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={caseImg} className="image" alt="processor"/>
                    <div className="menu__content">
                        <h3>Cases</h3> 
                        <p>to see the list of available devices, click the button below</p>
                        <Link to={"/cases"} className="btn">See all products</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={accessoriesImg} className="image" alt="processor"/>
                    <div className="menu__content">
                        <h3>Accessories</h3> 
                        <p>to see the list of available devices, click the button below</p>
                        <Link to={"/accessories"} className="btn">See all products</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu;