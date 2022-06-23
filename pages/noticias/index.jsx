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
                { noticias_list.map( ({titulo, dia, mes, ano, noticia, img_src, alt, lar, link, links, images, youtube}, index) => 
                    <Link href={{ pathname: link, query: { titulo, dia, mes, ano, noticia, img_src, links, images, youtube }}} key={index}>
                        <a className={Style.a}>
                            <li className={Style.li}>
                                <div className={Style.image_notice} style={{
                                    backgroundImage: `url('/noticias/${img_src}')`, 
                                    backgroundPosition: "center", 
                                    backgroundSize: "cover", 
                                }}>
                                    {
                                    /*<div className={Style.image_style} style={{
                                        width: 250*alt/lar <= 140 ? 250 : 140*lar/alt,
                                        height: 250*alt/lar <= 140 ? 250*alt/lar : 140
                                    }}>
                                    <Image className={Style.image}  src={`/noticias/${img_src}`} 
                                           width={250*alt/lar <= 140 ? 250 : 140*lar/alt} 
                                           height={250*alt/lar <= 140 ? 250*alt/lar : 140}/>
                                    </div>*/
                                    }
                                </div>
                                <div className={Style.title_notice}>{titulo}</div>
                                <div className={Style.data_notice}>{dia}/{mes}/{ano}</div>
                            </li>
                        </a>
                    </Link>) }                
            </ul>
            <Footer/>            
        </div>
    );
}
