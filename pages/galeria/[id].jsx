import React, { Component } from 'react';
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Image from 'next/image';

import style from './galeria.module.css'

import Header from './../components/header';
import Footer from './../components/footer';


    

  
export default function album_fotos(){

    const router = useRouter();
    const { query: { id } } = router;

    return (
        <div className={style.background}>
        <Header/>
        <div className={style.box_galeria}>
            <span className={style.title}>{id}</span>
            <div className={style.carousel_ext}>
            <Carousel>
                <div>
                    <img src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'/>
                    

                </div>
                <div>
                    <img src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'/>
                    

                </div>
                <div>
                    <img src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'/>
                    

                </div>
                <div>
                    <img src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'/>
                    

                </div>
                <div>
                    <img src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'/>                   

                </div>
            </Carousel>
            </div>
        </div>
        <Footer/>            
    </div>
    ); 
};