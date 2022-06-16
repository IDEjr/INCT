import React, { Component } from 'react';
import { useRouter } from "next/router";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';

import style from './anonima.module.css'
import style_car from "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../components/header';
import Footer from '../components/footer';

export default function album_fotos(){

    const router = useRouter();
    const {g, title}  = router.query;
    if(!g) return<></>;
    const list_pesquisadores = require(`../../public/nucleos/pesquisadores/${g}/${g}.json`);
    const list_estrutura = require(`../../public/nucleos/estrutura/${g}/${g}.json`);
    const list_galeria = require(`../../public/nucleos/galeria/${g}/${g}.json`);

    return (
        <div className={style.background}>
            <Header/>
            
            <div className={style.box_galeria}>
                <span className={style.title}>{title}</span>  

                <div className={style.box_content}>
                    { list_pesquisadores.length === 0 ? <></> :
                    <>
                    <div className={style.box_list_title_round}>
                        <span className={style.name_list_title}>Pesquisadores</span>
                    </div>
                    <ul className={style.list_pesq}>                
                         {list_pesquisadores.map( ({nome, imagem, link}, index) => 
                            <Link key={index} href={link}><a className={style.link_pesq}>
                                <li className={style.box_pesq}>
                                    <div className={style.image_pesq} style={{
                                        backgroundImage: `url('/nucleos/pesquisadores/${g}/${imagem}')`, 
                                        backgroundPosition: "center", 
                                        backgroundSize: "cover", 
                                    }}>
                                    </div>
                                    <div className={style.text_pesq}>{nome}</div>
                                </li> 
                            </a></Link>)}                 
                    </ul>
                    </>
                    }

                    { list_estrutura.length === 0 ? <></> :
                    <>
                    <div className={style.box_list_title}>
                        <span className={style.name_list_title}>Estrutura</span>
                    </div>
                    <div className={style.carousel_ext}>            
                        <Carousel onClickItem={(i, item) => window.open(`/nucleos/estrutura/${g}/${list_estrutura[i]["imagem"]}`, "_blank")}              
                                dynamicHeight emulateTouch useKeyboardArrows showStatus={false} showIndicators={false} showThumbs={false}
                                autoPlay infiniteLoop>
                            {list_estrutura.map(({imagem, descricao}, index) => 
                                <div key={index} className={style.div_estrutura}>
                                    <img src={`/nucleos/estrutura/${g}/${imagem}`}/>
                                    <div className={style.description_box}>
                                        <p className={style.description}>{descricao}</p>    
                                    </div>
                                </div>
                            )}
                        </Carousel>
                    </div>
                    </>
                    }

                    { list_galeria.length === 0 ? <></> :
                    <>
                    <div className={style.box_list_title}>
                        <span className={style.name_list_title}>Galeria</span>
                    </div>
                    <div className={style.carousel_ext_thumbs}>            
                        <Carousel onClickItem={(i, item) => window.open(`/nucleos/galeria/${g}/${list_galeria[i]}`, "_blank")}              
                                dynamicHeight emulateTouch useKeyboardArrows showStatus={false} showIndicators={false}
                                autoPlay infiniteLoop>
                            {list_galeria.map((image, index) => 
                                <img key={index} src={`/nucleos/galeria/${g}/${image}`}/>
                            )}
                        </Carousel>
                    </div>
                    </>
                    }
                </div>
            </div>

            <Footer/>            
        </div>
    ); 
};