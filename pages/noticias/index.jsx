import react, { useState } from 'react';
import Image from 'next/image'

import Header from '../components/header';
import Footer from '../components/footer';

import Style from './noticias.module.css';

const noticias_list = require('./noticias.json');

export default function Noticias(){

    return (

        <div className={Style.background}>
            <Header/>
            <div className={Style.title_bar}>
                <span className={Style.text_title}>Notícias</span>                
            </div>

            <ul className={Style.ul}>                
                { noticias_list.map( ({key, titulo, dia, mes, ano, noticia, img_src, link}) => <a className={Style.a} href={link}><li  key={key}><Image className={Style.image}  src={img_src} width={250} height={150}/><br/><span className={Style.title_notice}>{titulo}</span><br/><span className={Style.data_notice}>{dia}/{mes}/{ano}</span></li></a>) }                
            </ul>
            <Footer/>            
        </div>
    );
}
