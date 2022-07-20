import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import styles from "../styles/Home.module.css";
import styles_n from "./noticias/noticias.module.css";

import Header from "./components/header";
import Footer from "./components/footer";
//import Carousel from 'react-elastic-carousel';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Item_Artigo from './components/item_artigos';
import Item_Noticia from './components/item_noticias';
import Title from './components/title';


import { handleJSONfiles } from '../utils/postHandler';

export function getStaticProps() {
    const articles_list = handleJSONfiles('./public/posts/artigos');
    const noticias_list = handleJSONfiles('./public/posts/noticias');
    const divulgacao_list = handleJSONfiles('./public/posts/divulgacao');
    const main_carousel = handleJSONfiles('./public/posts/home/avisos');
    const carousel_revistas = handleJSONfiles('./public/posts/home/revistas');
  
    return {
      props: { articles_list, divulgacao_list, noticias_list, main_carousel, carousel_revistas },
    };
}


export default function Home(props) {

  return (        

    <div className={styles.background}>
      <Header />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
      <div className={styles.bg2}>
        <Carousel autoPlay infiniteLoop
                  dynamicHeight
                  emulateTouch
                  useKeyboardArrows
                  showThumbs={false} 
                  showStatus={false}
                  className={styles.carousel}>
          {props.main_carousel.map(({src, para}, index) => 
          <Link href={para} key={index}><a>
          <Image className={styles.image} src={`/posts/home/avisos/${src}`} width="800px" height="500px"/>
          </a></Link>)}
        </Carousel>
      </div>
      
      <Title title="Últimas Divulgações Científicas" color="#FAC70A" />
      <ul className={styles_n.ul}>                
            { props.divulgacao_list.map( ({titulo, dia, mes, ano, img_src, fileName}, index) => 
                  index < 3 && (
                    <Item_Noticia key={index} titulo={titulo} dia={dia} mes={mes} ano={ano} img_src={img_src} link={`/noticias/${fileName}`}  />
            ))}                
      </ul>

      <Title title="Últimas notícias" color="#87B93F" />
      <ul className={styles_n.ul}>                
            { props.noticias_list.map( ({titulo, dia, mes, ano, img_src, fileName}, index) => 
                  index < 3 && (
                    <Item_Noticia key={index} titulo={titulo} dia={dia} mes={mes} ano={ano} img_src={img_src} link={`/noticias/${fileName}`}  />
            ))}                
      </ul>

      <Title title="Últimos artigos"/>
     <div className={styles.container_artigos}>
        <div className={styles.bg3}>
          <Carousel autoPlay infiniteLoop
                    dynamicHeight
                    emulateTouch
                    useKeyboardArrows
                    showIndicators={false} 
                    showThumbs={false} 
                    showStatus={false}
                    className={styles.carousel_revistas}>
            {props.carousel_revistas.map(({src, doi}, index) =>
            <Link href={doi} key={index}><a className={styles.link_image}>
              <div><img key={index} className={styles.revista} src={`/posts/home/revistas/${src}`}/></div>
            </a></Link>)}
          </Carousel>   
        </div>
        
        <ul className={styles.ul2}>
          {props.articles_list.map(
            ({nome, autores, publicador, versao, paginas, ano, link }, index) =>
              index < 3 && (
                <Item_Artigo key={index} nome = {nome} autores = {autores} publicador = {publicador} versao = {versao} paginas = {paginas} ano = {ano} link = {link} width="100%"/>
              )
          )}
        </ul>
      </div>

      <Footer id="id-footer"/>
    </div>
  );
}