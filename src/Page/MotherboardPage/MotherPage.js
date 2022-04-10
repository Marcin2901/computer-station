import React, {useEffect, useState} from "react";
import ProductComponent from "../../Components/ProductComponent/ProductComponent";
import ProductPageComponent from "../../Components/ProductPageComponent/ProductPageComponent";
import { motherboardsData } from "../../DemoDatabase/DemoDatabase";

// const axios = require('axios');
// const cheerio = require('cheerio');

const Motherboard = () => {

  //   const url = 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html'
  //   useEffect(() => {
  //     axios(url, {"headers" : {"Content-Type" : "application/json"}, "method" : "post"})
  //       .then(res => {
  //         const html = res.data
  //         const $ = cheerio.load(html)
  //         $('.eYsBmG', html).each(function() {
  //           const title =  $(this).find('h3').text();
  //           const src = $(this).find('.cUUTZW').find('img').last().attr('src');
  //           const price = $(this).find('.fTPISE').find('span').last().text();
  //           const details = [$(this).find('.iNfAAG').find('li').first().text(), $(this).find('.iNfAAG').find('li').last().text()];
  //           setMotherboards(prevState => [...prevState, {title, src, price, details}])
  //         })
  //       })
  // }, []);
  const [motherboards, setMotherboards] = useState([])

  useEffect(() => {
     motherboardsData.forEach(item => {
       setMotherboards(prevState => [...prevState, {title: item.title, src: item.src, price: item.price, details: item.details}])
     })
  }, []);
  
  return (
      <ProductPageComponent title="Motherboards" products={motherboards.map((item, index) => <ProductComponent key={index} title={item.title} src={item.src} price={item.price} details={item.details} />)} />
  )
}

export default Motherboard;