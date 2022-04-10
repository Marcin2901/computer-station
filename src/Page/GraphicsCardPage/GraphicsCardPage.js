import React, {useEffect, useState} from "react";
import ProductComponent from "../../Components/ProductComponent/ProductComponent";
import ProductPageComponent from "../../Components/ProductPageComponent/ProductPageComponent";
import { graphicsCardsData } from "../../DemoDatabase/DemoDatabase";

// const axios = require('axios');
// const cheerio = require('cheerio');



const GraphicsCardPage = () => {

    // const url = 'https://www.x-kom.pl/g-5/c/345-karty-graficzne.html'
    // useEffect(() => {
    //     axios(url, {"headers" : {"Content-Type" : "application/json"}, "method" : "post"})
    //       .then(res => {
    //         const html = res.data
    //         const $ = cheerio.load(html)
    //         $('.eYsBmG', html).each(function() {
    //           const title =  $(this).find('h3').text();
    //           const src = $(this).find('.cUUTZW').find('img').last().attr('src');
    //           const price = $(this).find('.fTPISE').find('span').last().text();
    //           const details = [$(this).find('.iNfAAG').find('li').first().text(), $(this).find('.iNfAAG').find('li').last().text()];
    //           setGraphicsCards(prevState => [...prevState, {title, src, price, details}])
    //         })
    //       })
    // }, []);

    const [graphicsCards, setGraphicsCards] = useState([])

    useEffect(() => {
      graphicsCardsData.forEach(item => {
        setGraphicsCards(prevState => [...prevState, {title: item.title, src: item.src, price: item.price, details: item.details}])
      })
    }, []);
    
    return (
        <ProductPageComponent title="Graphics Cards" products={graphicsCards.map((item, index) => <ProductComponent key={index} title={item.title} src={item.src} price={item.price} details={item.details} />)} />
    )
}

export default GraphicsCardPage;