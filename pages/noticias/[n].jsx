import { useEffect, useState} from 'react';
import { useRouter } from "next/router";
import { Carousel } from 'react-responsive-carousel';
import ReactMarkdown from "react-markdown";

import Link from 'next/link';
import ReactPlayer from 'react-player/youtube';

import style from './noticias.module.css'
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
                {!youtube ? <></> :
                    <div className={style.box_player}>
                        <ReactPlayer url={youtube}
                            muted
                            controls
                            playing={false} 
                        />                                        
                    </div>
                }

                <ReactMarkdown className={style.text_noticia} children={content}/>

                {!images? <></> :
                    <div className={style.box_caurosel}>
                        {console.log(images)}
                        <div className={style.carousel_ext}>
                            <Carousel onClickItem={
                                            (i, item) => window.open(`/noticias/${images[i].src}`, "_blank")
                                        } 
                                      dynamicHeight
                                      emulateTouch
                                      useKeyboardArrows
                                      showStatus={false}
                                      showThumbs={false}
                                      autoPlay
                                      infiniteLoop>
                                {images.map((image, index) => 
                                        <img key={index} alt={image} src={`/noticias/${image}`}/>                                        
                                )}
                            </Carousel>
                        </div>
                    </div>
                }
                {!links? <></> :
                    <div className={style.box_links}>
                        <span><br/><br/>Links úteis:</span>
                        <span>
                        {links.map((l, index) => <Link key={index} href={l}><a className={style.box_links}><span>{l}</span></a></Link>)}
                        </span>                    
                    </div>
                }
            </div>            
        </div>        
        <Footer/>            
    </div>
    ); 
};