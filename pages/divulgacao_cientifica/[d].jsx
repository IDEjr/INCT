import { useRouter } from "next/router";
import { Carousel } from 'react-responsive-carousel';

import ReactPlayer from 'react-player/youtube';
import ReactMarkdown from 'react-markdown';

import style from './divulgacao.module.css'
import style_car from "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../components/header';
import Title from '../components/title';
import Box from '../components/main_box';
import Footer from '../components/footer';

export default function Divulgacao(props){

    const router = useRouter();
    const {d} = router.query;

    if(!d) return(<></>);
        
    const { titulo, dia, mes, ano, noticia, images, youtube } = require(`../../public/posts/divulgacao/${d}.json`);   

    return (
        <>
        <Header/>
        <Title title="Divulgação Científica" color="#FAC70A"/>
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

                <ReactMarkdown children={noticia}/>

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
                                    images.map((image, index) => <img key={index} alt={image} src={`/posts/divulgacao/${image}`}/>)
                                                                : 
                                    <img alt={images} src={`/posts/divulgacao/${images}`}/>
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