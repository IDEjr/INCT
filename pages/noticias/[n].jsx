import react from 'react';
import { useRouter } from "next/router";

import Image from 'next/image';

import style from './noticias.module.css'

import Header from '../components/header';
import Footer from '../components/footer';

export default function album_fotos(){

    const router = useRouter();
    const {titulo, dia, mes, ano, noticia, img_src} = router.query;    

    return (
        <div>
        <Header/>
        <div className={style.title_bar}>
            <span className={style.text_title}>Notícias</span>            
        </div>        
        <div style={{ backgroundImage: `url('/noticias/${img_src}')`, 
                      backgroundPosition: "center", 
                      backgroundSize: "cover", 
                      width:"100%", 
                      height:"50vh",
                      marginTop: "1%"}} />

        <div className={style.box_background}>
            <div className={style.box_text}>
                <div className={style.box_text_title}>
                    <span>{titulo}</span>
                    <span>{`${dia}/${mes}/${ano}`}</span>                    
                </div>
                <span className={style.text_noticia}>{noticia}</span>           

            </div>            
        </div>        
        <Footer/>            
    </div>
    ); 
};