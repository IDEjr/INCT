import react from 'react';
import Image from 'next/image'
import Link from "next/link";

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
                { noticias_list.map( ({titulo, dia, mes, ano, noticia, img_src, link}, index) => 
                    <Link href={{ pathname: link, query: { titulo, dia, mes, ano, noticia, img_src }}} key={index}>
                        <a className={Style.a}>
                            <li className={Style.li}>
                                <Image className={Style.image}  src={`/noticias/${img_src}`} width={250} height={150}/><br/>
                                <span className={Style.title_notice}>{titulo}</span><br/>
                                <span className={Style.data_notice}>{dia}/{mes}/{ano}</span>
                            </li>
                        </a>
                    </Link>) }                
            </ul>
            <Footer/>            
        </div>
    );
}
