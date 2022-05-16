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
    const {g, title}  = router.query;
    if(!g) return<></>;
    const list_Images = require(`../../public/galeria/${g}/${g}.json`);
    
    return (
        <div>
            <Header/>
            <div className={style.box_galeria}>
                <span className={style.title}>{title}</span>            
                <div className={style.carousel_ext}>            
                    <Carousel onClickItem={(i, item) => window.open(`/galeria/${g}/${list_Images[i]}`, "_self")} dynamicHeight emulateTouch useKeyboardArrows showStatus={false} showIndicators={false}>
                        {list_Images.map((image, index) => 
                            <img key={index} src={`/galeria/${g}/${image}`}/>
                        )}
                    </Carousel>
                </div>
            </div>
            <Footer/>            
        </div>
    ); 
};