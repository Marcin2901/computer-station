import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import { ItemContext } from "../../Context/ItemContextProvider";

const Navbar = () => {

    const [menuToggler, setMenuToggler] = useState(false);

    const handleToggler = () => {
        setMenuToggler(prevState => !prevState);
    }

    const {setItemContainerOpen, listOfItems} = useContext(ItemContext);

    return (
        <nav className="navbar">
            <Link to={"/"}> <i className="fas fa-laptop"></i></Link>
            <div className={`${menuToggler ? "nav__items active" : "nav__items"}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#products">Products</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>
                <a href="#blogs">Blogs</a>
            </div>
            <div className="icons">
                <i onClick={() => setItemContainerOpen(prevState => !prevState)} className="fas fa-shopping-cart">
                    {listOfItems.length > 0 && <span className="notification">{listOfItems.length}</span>}
                </i>
                <i onClick={handleToggler} className={`${menuToggler ? "fas fa-times" : "fas fa-bars"}`}></i>
            </div>
        </nav>
    )
}

export default Navbar;