import { useEffect, useState} from 'react';
import { useRouter } from "next/router";
import { Carousel } from 'react-responsive-carousel';

import Link from 'next/link';
import ReactPlayer from 'react-player/youtube';

import style from './divulgacao_cientifica.module.css'
import style_car from "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../components/header';
import Footer from '../components/footer';

export default function album_fotos(){

    const router = useRouter();
    const {titulo, dia, mes, ano, noticia, img_src, links, images, youtube} = router.query;
    
    const [content, setContent] = useState("");
    
    useEffect(() => {
        fetch(noticia)
            .then(res => res.text())
            .then(res => setContent(res));
    });

    if(!titulo) return <></>;

    return (
        <div className={style.background}>
        <Header/>
        <div className={style.title_bar}>
            <span className={style.text_title}>Divulgação Científica</span>            
        </div>        

        <div className={style.box_background}>
            <div className={style.box_text}>
                <div className={style.box_text_title}>
                    <span>{titulo}</span>
                    <span>{`${dia}/${mes}/${ano}`}</span>                    
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
                                    <img alt={images} src={`/divulgacao_cientifica/${images}`}/>
                                }
                            </Carousel>
                        </div>
                    </div>
                }
                {// UPDATE: links podem ser colocados no markdown
                 //!links? <></> :
                 //   <div className={style.box_links}>
                 //       <span>Links úteis:</span>
                 //       <span>
                 //       {links.map((l, index) => <Link key={index} href={l}><a className={style.box_links}><span>{l}</span></a></Link>)}
                 //       </span>                    
                 //   </div>
                }
            </div>            
        </div>        
        <Footer/>            
    </div>
    ); 
};