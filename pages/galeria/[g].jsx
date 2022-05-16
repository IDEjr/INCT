import React, { Component } from 'react';
import { useRouter } from "next/router";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import style from './galeria.module.css'
import style_car from "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../components/header';
import Footer from '../components/footer';

export default function album_fotos(){

    const router = useRouter();
    const title = router.query.title;
    const link = router.query.link;

    const list_Images = require(`../../public/galeria/${link}/${link}.json`);

    return (
        <div>
            <Header/>
            <div className={style.box_galeria}>
                <span className={style.title}>{title}</span>            
                <div className={style.carousel_ext}>            
                    <Carousel emulateTouch useKeyboardArrows showStatus={false} showIndicators={false}>
                        {list_Images.map((image, index) => 
                            <img key={index} src={`/galeria/${link}/${image}`}/>
                        )}
                    </Carousel>
                </div>
            </div>
            <Footer/>            
        </div>
    ); 
};