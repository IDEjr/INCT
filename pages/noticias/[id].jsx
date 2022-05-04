import React from 'react';
import { useRouter } from "next/router";

import Image from 'next/image';

import style from './noticias.module.css'

import Header from './../components/header';
import Footer from './../components/footer';

export default function album_fotos(){

    const router = useRouter();
    const { query: { id } } = router;

    return (
        <div className={style.background}>
        <Header/>
        <div className={style.title_bar}>
            <span className={style.text_title}>{id}</span>            
        </div>
        
        <div style={{backgroundColor: "black", width:"100%", height:"200px", position: "relative", overflow: "hidden"}}>
            <Image src='/noticias/noticia_exemplo.png' width="100%" height="100%" layout='responsive'/>
        </div>
        <Footer/>            
    </div>
    ); 
};