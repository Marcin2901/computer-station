import React, {useEffect, useState} from "react";
import ProductComponent from "../../Components/ProductComponent/ProductComponent";
import ProductPageComponent from "../../Components/ProductPageComponent/ProductPageComponent";
import { hardDisksData } from "../../DemoDatabase/DemoDatabase";

// const axios = require('axios');
// const cheerio = require('cheerio');

const HardDiskPage = () => {

    // const url = 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html'
    // useEffect(() => {
    //     axios(url)
    //       .then(res => {
    //         const html = res.data
    //         const $ = cheerio.load(html)
    //         $('.eYsBmG', html).each(function() {
    //           const title =  $(this).find('h3').text();
    //           const src = $(this).find('.cUUTZW').find('img').last().attr('src');
    //           const price = $(this).find('.fTPISE').find('span').last().text();
    //           const details = [$(this).find('.iNfAAG').find('li').first().text(), $(this).find('.iNfAAG').find('li').last().text()];
    //           setHardDisks(prevState => [...prevState, {title, src, price, details}])
    //         })
    //       })
    // }, []);

    const [hardDisks, setHardDisks] = useState([])

    useEffect(() => {
      hardDisksData.forEach(item => {
        setHardDisks(prevState => [...prevState, {title: item.title, src: item.src, price: item.price, details: item.details}])
      })
    }, []);

    return (
        <ProductPageComponent title="Hard Disks" products={hardDisks.map((item, index) => <ProductComponent key={index} title={item.title} src={item.src} price={item.price} details={item.details} />)} />
    )
}

export default HardDiskPage;