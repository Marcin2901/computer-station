import React, {useContext, useEffect} from "react";
import "./ProductComponent.css";
import { ItemContext } from "../../Context/ItemContextProvider";

const ProductComponent = (props) => {

    const {title, src, price, details} = props;
    const {listOfItems, setListOfItems} = useContext(ItemContext);

    const addCartItem = (item) => {
        let number;
        const quantity = listOfItems.filter(currentItem => {
            if(currentItem.title === item.title) {
                number = currentItem.quantity;
                return true;
            }
        }).length + number
        if(quantity >= 1) {
            setListOfItems(prevState => prevState.filter(currentItem => currentItem.title !== item.title).concat({...item, quantity: quantity}))
        } else {
            setListOfItems(prevState => [...prevState, {...item, quantity: 1}])
        }
    }

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(listOfItems))
    }, [listOfItems])

    const countValue = (value) => {
        const newValue = value.replace(/zł/, "").replace(/\s/, "")
        return parseInt(newValue);
    }

    return (
        <div className="product-item">
            <img src={src} alt="item" className="image"/>
            <div className="product-item__content">
                <h3>{title}</h3>
                <div className='stars'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                {
                    details &&
                    <div className="details">
                        {details.map((detail, i) => <p key={i}>{detail}</p>)}
                    </div>
                }
                <div className='purchase'>
                    <span>{countValue(price)},00 zł</span>
                    <i onClick={() => addCartItem({title, src, price})} className="fas fa-cart-plus"></i>
                </div>
                
            </div>
        </div>
    )
}

export default ProductComponent;