import React, {useContext, useEffect} from "react";
import "./ItemContainer.css";
import { ItemContext } from "../../Context/ItemContextProvider";
import CartItem from "../CartItem/CartItem";

const ItemContainer = () => {

    const {itemContainerOpen, listOfItems, setListOfItems} = useContext(ItemContext);

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("products")))
            setListOfItems(JSON.parse(localStorage.getItem("products")));
    }, [])
    const items = listOfItems.map((item, index) =>  <CartItem key={index} title={item.title} src={item.src} price={item.price} quantity={item.quantity} />)

    const countValue = (value) => {
        const newValue = value.replace(/zł/, "").replace(/\s/, "")
        return parseInt(newValue);
    }

    const calculateTotalCost = () => {
       return listOfItems.reduce((acum, item) => {
            return acum + countValue(item.price) * item.quantity
        }, 0)
    }

    return (
        <div className={`${itemContainerOpen ? "item-container active" : "item-container"}`}>
            <h3>Your Cart:</h3>
            <div className="item-container__content">
                {items}
            </div>
            <div className="summary">
                <span>total: {calculateTotalCost()},00 zł</span>
            </div>
        </div>
    )
}

export default ItemContainer;