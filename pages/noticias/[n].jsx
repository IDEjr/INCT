import { useEffect, useState} from 'react';
import { useRouter } from "next/router";
import { Carousel } from 'react-responsive-carousel';

import Link from 'next/link';
import ReactPlayer from 'react-player/youtube';

import style from './noticias.module.css'
import style_car from "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../components/header';
import Footer from '../components/footer';

export default function Noticia(props){

    const router = useRouter();
    const {n} = router.query;

    if(!n) return(<></>);
        
    const { titulo, dia, mes, ano, noticia, img_src, images, youtube } = require(`../../public/posts/noticias/${n}.json`);

    return (
        <div className={style.background}>
        <Header/>
        <div className={style.title_bar}>
            <span className={style.text_title}>Notícias</span>            
        </div>        
        {/*<div style={{ backgroundImage: `url('/noticias/${img_src}')`,
                      backgroundPosition: "center", 
                      backgroundSize: "cover", 
                      width:"100%", 
                      height:"50vh",
                      marginTop: "1%"}}>
                        <img src={`/noticias/${img_src}`} className={style.img_capa}/>
        </div>*/}

        <div className={style.box_background}>
            <div className={style.box_text}>
                <div className={style.box_text_title}>
                    <span>{titulo}</span>
                    {`${dia}/${mes}/${ano}` !== "//" ?
                        <span>{`${dia}/${mes}/${ano}`}</span>
                                                    :
                        <span></span>
                    }              
                </div>
                {!youtube ? <></> :
                    <div className={style.box_player}>
                        <ReactPlayer url={youtube}
                            controls
                            playing={false} 
                        />                                        
                    </div>
                }             

                {!images? <></> :
                    <div className={style.box_caurosel}>
                        <div className={style.carousel_ext}>
                            <Carousel dynamicHeight
                                      emulateTouch
                                      useKeyboardArrows
                                      showStatus={false}
                                      showThumbs={false}
                                      autoPlay
                                      infiniteLoop>
                                {typeof images != typeof 'string' ? 
                                    images.map((image, index) => <img key={index} alt={image} src={`/noticias/${image}`}/>)
                                                                  : 
                                    <img alt={images} src={`/noticias/${images}`}/>
                                }
                            </Carousel>
                        </div>
                    </div>
                }
            </div>            
        </div>        
        <Footer/>            
    </div>
    ); 
};