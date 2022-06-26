import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import styles from "../styles/Home.module.css";
import styles_n from "./noticias/noticias.module.css";
import styles_d from "./divulgacao_cientifica/divulgacao_cientifica.module.css"
import Header from "./components/header";
import Footer from "./components/footer";
//import Carousel from 'react-elastic-carousel';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Item from './components/item_artigos';


export default function Home() {
  const noticias_list = require("./noticias/noticias.json");
  const articles_list = require("./producoes/artigos/artigos.json");
  const divulgacao_list = require("/pages/divulgacao_cientifica/divulgacao_cientifica.json");
  const main_carousel = require ("./main_carousel.json");
  const carousel_revistas = require("./carousel_revistas.json");

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
          {main_carousel.map(({src, para}, index) => 
          <Link href={para} key={index}><a>
          <Image className={styles.image} src={src} width="800px" height="500px"/>
          </a></Link>)}
        </Carousel>
      </div>
      <div className={styles.title_bar}>
        <h2 className={styles.text_title}>Últimas notícias</h2>
      </div>
      <ul className={styles_n.ul}>                
                { noticias_list.map( ({titulo, dia, mes, ano, noticia, img_src, link, links, images, youtube}, index) => 
                    index < 3 && (
                      <Link href={{ pathname: link, query: { titulo, dia, mes, ano, noticia, img_src, links, images, youtube }}} key={index}>
                      <a className={styles_n.a}>
                          <li className={styles_n.li}>
                              <div className={styles_n.image_notice} style={{
                                  backgroundImage: `url('/noticias/${img_src}')`, 
                                  backgroundPosition: "center", 
                                  backgroundSize: "cover", 
                              }}/>
                              <div className={styles_n.data_notice}>{dia}/{mes}/{ano}</div>
                              <div className={styles_n.title_notice}>{titulo}</div>                              
                          </li>
                      </a>
                  </Link>)) }                
            </ul>

      <div className={styles.title_bar}>
        <h2 className={styles.text_title}>Divulgações Científicas</h2>
      </div>
      <ul className={styles_d.ul}>                
                { divulgacao_list.map( ({titulo, dia, mes, ano, noticia, img_src, link, links, images, youtube}, index) => 
                    index < 3 && (
                      <Link href={{ pathname: link, query: { titulo, dia, mes, ano, noticia, img_src, links, images, youtube }}} key={index}>
                      <a className={styles_d.a}>
                          <li className={styles_d.li}>
                              <div className={styles_d.image_notice} style={{
                                  backgroundImage: `url('/divulgacao_cientifica/${img_src}')`, 
                                  backgroundPosition: "center", 
                                  backgroundSize: "cover", 
                              }}/>
                              <div className={styles_d.title_notice}>{titulo}</div>
                              <div className={styles_d.data_notice}>{dia}/{mes}/{ano}</div>
                          </li>
                      </a>
                  </Link>)) }    
                  <Link href="divulgacao_cientifica"><a>
                  <div className={styles.ver_mais}>Ver mais...</div>
                  </a></Link>
            </ul>
        
      
      <div className={styles.title_bar2}>
        <h2 className={styles.text_title}>Últimos artigos</h2>
      </div>

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
            {carousel_revistas.map(({src, doi}, index) =>
            <Link href={doi} key={index}><a className={styles.link_image}>
              <div><img key={index} className={styles.revista} src={src}/></div>
            </a></Link>)}
          </Carousel>   
        </div>
        
        <ul className={styles.ul2}>
          {articles_list.map(
            ({nome, autores, publicador, versao, paginas, ano, link }, index) =>
              index < 3 && (
                <Item key={index} nome = {nome} autores = {autores} publicador = {publicador} versao = {versao} paginas = {paginas} ano = {ano} link = {link} width="100%"/>
              )
          )}
        </ul>
      </div>

      <Footer id="id-footer"/>
    </div>
  );
}
