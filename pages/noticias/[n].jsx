import { useEffect, useState} from 'react'

import { useRouter } from "next/router";
import { Carousel } from 'react-responsive-carousel';

import ReactPlayer from 'react-player/youtube';

import style from './noticias.module.css'
import style_car from "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../components/header';
import Title from '../components/title';
import Box from '../components/main_box';
import Footer from '../components/footer';

export default function Noticia(props){

    const router = useRouter();
    const {n} = router.query;

    if(!n) return(<></>);
        
    const { titulo, dia, mes, ano, noticia, img_src, position, images, youtube } = require(`../../public/posts/noticias/${n}.json`);   
   

    return (
        <>
        <Header/>
        <Title title="Notícias" color="#87B93F"/>
        <Box>                    
            <div className={style.box_text}>
                <div className={style.box_text_title}>
                    <span>{titulo}</span>
                    {`${dia}/${mes}/${ano}` !== "//" ?
                        <span>{`${dia}/${mes}/${ano}`}</span>
                                                    :
                        <></>
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

                {noticia}

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
        </Box>
        <Footer/>            
    </>
    ); 
};