import React, {useEffect, useState} from "react";
import ProductComponent from "../../Components/ProductComponent/ProductComponent";
import ProductPageComponent from "../../Components/ProductPageComponent/ProductPageComponent";
import { casesData } from "../../DemoDatabase/DemoDatabase";

// const axios = require('axios');
// const cheerio = require('cheerio');

const CasesPage = () => {

    // const url = 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html'
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
    //           setCases(prevState => [...prevState, {title, src, price, details}])
    //         })
    //       })
    // }, []);

    const [cases, setCases] = useState([])

    useEffect(() => {
        casesData.forEach(item => {
          setCases(prevState => [...prevState, {title: item.title, src: item.src, price: item.price, details: item.details}])
      })
    }, []);
    
    return (
        <ProductPageComponent title="Cases" products={cases.map((item, index) => <ProductComponent key={index} title={item.title} src={item.src} price={item.price} details={item.details} />)} />
    )
}

export default CasesPage;