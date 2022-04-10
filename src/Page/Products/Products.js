import React, {useContext, useEffect} from 'react';
import "./Products.css";
import { ItemContext } from '../../Context/ItemContextProvider';
import option1Img from "../../Images/products-option3.jpg";
import option2Img from "../../Images/products-option4.jpg";
import option3Img from "../../Images/products-option5.jpg";
import option4Img from "../../Images/products-option6.jpg";
import option5Img from "../../Images/products-option2.png";
import option6Img from "../../Images/products-option1.png";

const Products = () => {

    const {listOfItems, setListOfItems} = useContext(ItemContext);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(listOfItems))
    }, [listOfItems])

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
            setListOfItems(prevState => [...prevState, {...item}])
        }
    }

    return (
        <section className='products' id='products'>
            <h2 className='heading'> our <span>products</span></h2>

            <div className='box--container'>
                <div className='box'>
                    <img className="image" src={option1Img} alt="computer"/>
                    <div className='products__content'>
                        <h3>{"G4M3R HERO i5-11400F/16GB/1TB/RTX3060/W11x"}</h3>
              
                        <div className='stars'>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className='product-info'>
                            <span>Operating system: Windows 11 Home</span>
                            <span>Processor: Intel Core i5-11400F </span>
                            <span>Graphics: NVIDA GeForce RTX 3060</span>
                            <span>RAM Memory: 16GB</span>
                        </div>
                        <div className='purchase'>
                            <span className='price'>1600.99 zł</span>
                            <i onClick={() => addCartItem(
                                {title: "G4M3R HERO i5-11400F/16GB/1TB/ RTX3060/W11x",
                                 src:option1Img, price: "1600.99",
                                 quantity: 1})} className="fas fa-cart-plus"></i>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <img className="image" src={option2Img} alt="computer"/>
                    <div className='products__content'>
                        <h3>{"G4M3R HERO i5-11400F/16GB/1TB/RTX2060/W11x"}</h3>
                        <div className='stars'>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className='product-info'>
                            <span>Operating system: Windows 11 Pro</span>
                            <span>Processor: Intel Core i5-10400 </span>
                            <span>Graphics: Intel UHD Graphics 630</span>
                            <span>RAM Memory: 16GB</span>
                        </div>
                        <div className='purchase'>
                            <span className='price'>1200.99 zł</span>
                            <i onClick={() => addCartItem(
                                {title: "G4M3R HERO i5-11400F/16GB/1TB/ RTX2060/W11x",
                                 src:option2Img, price: "1200.99",
                                 quantity: 1})} className="fas fa-cart-plus"></i>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <img className="image" src={option3Img} alt="computer"/>
                    <div className='products__content'>
                        <h3>{"Dell Vostro 3888 MT i5‑10400/16GB/512/Win11P"}</h3>
                        <div className='stars'>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className='product-info'>
                            <span>Operating system: Windows 11 Home</span>
                            <span>Processor: Intel Core i7-11700F </span>
                            <span>Graphics: NVIDA GeForce RTX 3060 TI</span>
                            <span>RAM Memory: 16GB</span>
                        </div>
                        <div className='purchase'>
                            <span className='price'>2200.99 zł</span>
                            <i onClick={() => addCartItem(
                                {title: "Dell Vostro 3888 MT i5‑10400/ 16GB/512/Win11P",
                                 src:option3Img, price: "2200.99",
                                 quantity: 1})} className="fas fa-cart-plus"></i>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <img className="image" src={option4Img} alt="computer"/>
                    <div className='products__content'>
                        <h3>{"Acer Nitro 50 i5‑11400F/16GB/512 RTX3060Ti"}</h3>
                        <div className='stars'>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className='product-info'>
                            <span>Operating system: Windows 11 Pro</span>
                            <span>Processor: Intel Core i5-10400 </span>
                            <span>Graphics: Intel UHD Graphics 630</span>
                            <span>RAM Memory: 16GB</span>
                        </div>
                        <div className='purchase'>
                            <span className='price'>1100.99 zł</span>
                            <i onClick={() => addCartItem(
                                {title: "Acer Nitro 50 i5‑11400F/16GB/ 512 RTX3060Ti",
                                 src:option4Img, price: "1100.99",
                                 quantity: 1})} className="fas fa-cart-plus"></i>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <img className="image" src={option5Img} alt="computer"/>
                    <div className='products__content'>
                        <h3>{"Dell Vostro 3888 MT i5‑10400/16GB/480+1TB/Win11P"}</h3>
                        <div className='stars'>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className='product-info'>
                            <span>Operating system: Windows 11 Pro</span>
                            <span>Processor: Intel Core i5-11400F </span>
                            <span>Graphics: NVIDA GeForce RTX 3060</span>
                            <span>RAM Memory: 16GB</span>
                        </div>
                        <div className='purchase'>
                            <span className='price'>1700.99 zł</span>
                            <i onClick={() => addCartItem(
                                {title: "Dell Vostro 3888 MT i5‑10400/16GB/ 480+1TB/Win11P",
                                 src:option5Img, price: "1700.99",
                                 quantity: 1})} className="fas fa-cart-plus"></i>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <img className="image" src={option6Img} alt="computer"/>
                    <div className='products__content'>
                        <h3>{"G4M3R HERO i7‑11700F/16GB/1TB/RTX3060Ti/W11x"}</h3>
                        <div className='stars'>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className='product-info'>
                            <span>Operating system: Windows 11 Home</span>
                            <span>Processor: Intel Core i5-11400F </span>
                            <span>Graphics: NVIDA GeForce RTX 2060</span>
                            <span>RAM Memory: 16GB</span>
                        </div>
                        <div className='purchase'>
                            <span className='price'>1500.99 zł</span>
                            <i onClick={() => addCartItem(
                                {title: "G4M3R HERO i7‑11700F/16GB/1TB/ RTX3060Ti/W11x",
                                 src:option6Img, price: "1500.99",
                                 quantity: 1})} className="fas fa-cart-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;