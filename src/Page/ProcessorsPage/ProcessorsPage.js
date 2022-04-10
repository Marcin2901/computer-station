import React, {useEffect, useState} from "react";
import ProductComponent from "../../Components/ProductComponent/ProductComponent";
import ProductPageComponent from "../../Components/ProductPageComponent/ProductPageComponent";
import { procesoresData } from "../../DemoDatabase/DemoDatabase";

// const axios = require('axios');
// const cheerio = require('cheerio');

const ProcessorsPage = () => {
  // const cors = require('cors');
  // app.use(cors({ origin: true }));
    // const url = 'https://www.x-kom.pl/g-5/c/11-procesory.html'
    // useEffect(() => {
    //     axios( {
    //       method: 'post',
    //       headers: { 'Content-Type': 'application/json'},
    //       url: url,
    //     })
    //       .then(res => {
    //         const html = res.data
    //         const $ = cheerio.load(html)
    //         $('.eYsBmG', html).each(function() {
    //           const title =  $(this).find('h3').text();
    //           const src = $(this).find('.cUUTZW').find('img').last().attr('src');
    //           const price = $(this).find('.fTPISE').find('span').last().text();
    //           const details = [$(this).find('.iNfAAG').find('li').first().text(), $(this).find('.iNfAAG').find('li').last().text()];
    //           setProcessores(prevState => [...prevState, {title, src, price, details}])
    //         })
    //       })
    // }, []);

    const [processores, setProcessores] = useState([])

    useEffect(() => {
        procesoresData.forEach(processor => {
          setProcessores(prevState => [...prevState, {title: processor.title, src: processor.src, price: processor.price, details: processor.details}])
       })
    }, []);
   
    return (
        <ProductPageComponent title="Processores" products={processores.map((item, index) => <ProductComponent key={index} title={item.title} src={item.src} price={item.price} details={item.details} />)} />
    )
}

export default ProcessorsPage;