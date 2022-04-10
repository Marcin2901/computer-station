import React, {useEffect, useState} from "react";
import ProductComponent from "../../Components/ProductComponent/ProductComponent";
import ProductPageComponent from "../../Components/ProductPageComponent/ProductPageComponent";
import { ramMemoryData } from "../../DemoDatabase/DemoDatabase";

// const axios = require('axios');
// const cheerio = require('cheerio');



const RamMemoryPage = () => {

    // const url = 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html'
    // useEffect(() => {
    //    axios(url)
    //     .then(res => {
    //           const html = res.data
    //           const $ = cheerio.load(html)
    //           $('.eYsBmG', html).each(function() {
    //             const title =  $(this).find('h3').text();
    //             const src = $(this).find('.dOfCZX').find('img').last().attr('src');
    //             const price = $(this).find('.fTPISE').find('span').last().text();
    //             const details = [$(this).find('.iNfAAG').find('li').first().text(), $(this).find('.iNfAAG').find('li').last().text()];
    //             setRamMemory(prevState => [...prevState, {title, src, price, details}])
    //           })
    //         })
    // }, []);

    const [ramMemory, setRamMemory] = useState([])

    useEffect(() => {
      ramMemoryData.forEach(item => {
        setRamMemory(prevState => [...prevState, {title: item.title, src: item.src, price: item.price, details: item.details}])
     })
  }, []);
    
    return (
        <ProductPageComponent title="Ram Memory" products={ramMemory.map((item, index) => <ProductComponent key={index} title={item.title} src={item.src} price={item.price} details={item.details} />)} />
    )
}

export default RamMemoryPage;