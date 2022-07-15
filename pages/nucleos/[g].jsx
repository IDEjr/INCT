import React, { Component } from 'react';
import { useRouter } from "next/router";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';



import style from './anonima.module.css'
import style_car from "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../components/header';
import Title from '../components/title';
import Box from '../components/main_box';
import Footer from '../components/footer';
import Err from '../components/error_msg';

export default function galeria(){

    const router = useRouter();
    const {g, title}  = router.query;
    if(!g) return<></>;

    const { list_pesquisadores, list_estrutura, list_galeria } = require(`../../public/posts/nucleos/${g}`);

    return (
        <>
            <Header/>
            <Title title={title} color="#FAC70A"/>
            <Box>
            { list_pesquisadores.length === 0 ? <></> :
            <div className={style.box_content}>
                <div className={style.box_list_title_round}>
                    <span className={style.name_list_title}>Equipe</span>
                </div>
                <ul className={style.list_pesq}>                
                    { list_pesquisadores.map( ({nome, imagem, link, cargo}, index) => 
                        <Link key={index} href={link}><a className={style.link_pesq}>
                            <li className={style.box_pesq}>
                                <div className={style.image_pesq} style={{
                                    backgroundImage: `url('/posts/nucleos/${imagem}')`, 
                                    backgroundPosition: "center", 
                                    backgroundSize: "cover", 
                                }}>
                                </div>
                                <div className={style.text_pesq}>{nome}
                                <div className={style.text_cargo}>{cargo}</div>
                                </div>
                            </li> 
                        </a></Link>)}                 
                </ul>
            </div>
            }

            { list_estrutura.length === 0 ? <></> :
            <div className={style.box_content}>
            <div className={style.box_list_title}>
                <span className={style.name_list_title}>Estrutura</span>
            </div>
                <div className={style.carousel_ext}>            
                    <Carousel onClickItem={(i, item) => window.open(`/posts/nucleos/estrutura/${g}/${list_estrutura[i]["imagem"]}`, "_blank")}              
                            dynamicHeight emulateTouch useKeyboardArrows showStatus={false} showIndicators={false} showThumbs={false}
                            autoPlay infiniteLoop>
                        {list_estrutura.map(({imagem, descricao}, index) => 
                            <div key={index} className={style.div_estrutura}>
                                <img src={`/posts/nucleos/estrutura/${g}/${imagem}`}/>
                                <div className={style.description_box}>
                                    <p className={style.description}>{descricao}</p>    
                                </div>
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
            }

            { list_galeria.length === 0 ? <></> :
            <div className={style.box_content}>
                <div className={style.box_list_title}>
                    <span className={style.name_list_title}>Galeria</span>
                </div>
                <div className={style.carousel_ext_thumbs}>            
                    <Carousel onClickItem={(i, item) => window.open(`/posts/nucleos/galeria/${g}/${list_galeria[i]}`, "_blank")}              
                            dynamicHeight emulateTouch useKeyboardArrows showStatus={false} showIndicators={false}
                            autoPlay infiniteLoop>
                        {list_galeria.map((image, index) => 
                            <img key={index} src={`//posts/nucleos/galeria/${g}/${image}`}/>
                        )}
                    </Carousel>
                </div>
            </div>
            }
            { ((list_galeria.length == 0) && (list_estrutura.length == 0) && (list_pesquisadores.length == 0)) ?
                <Err msg="Desculpe, mas o núcleo ainda não atualizou seu conteúdo"/>
                :<></>
            }
            </Box> 
            <Footer/>                     
        </>
    ); 
};