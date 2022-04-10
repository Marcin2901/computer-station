import React, {useContext} from 'react';
import "./CartItem.css";
import { ItemContext } from '../../Context/ItemContextProvider';

const CartItem = (props) => {

    const {title, src, price, quantity} = props;
    const {setListOfItems} = useContext(ItemContext);

    const removeItem = () => {
        setListOfItems(prevState => prevState.filter(item => item.title !== title))
    }

    const countValue = (value) => {
        const newValue = value.replace(/zł/, "").replace(/\s/, "")
        return parseInt(newValue);
    }

    return (
        <div className='cart-item'>
            <div className='x' onClick={removeItem}><i className='fas fa-times'></i></div>
            <img src={src} alt='item-in-cart'/>
            <div className='cart-item__content'>
                <h4>{title}</h4>
                <span className='quantity'>{quantity} szt.</span>
                <span>{quantity * countValue(price)},00 zł</span>
            </div>
        </div>
    )
}

export default CartItem;