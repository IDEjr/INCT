import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles_n from "./noticias/noticias.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
//import Carousel from 'react-elastic-carousel';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Item from './artigos/item_artigo.jsx';
import Link from "next/link";

export default function Home() {
  const noticias_list = require("./noticias/noticias.json");
  const articles_list = require("./artigos/artigos.json");
  
  const items = [
    {id: 1, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'},
    {id: 2, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'},
    {id: 3, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'},
    {id: 4, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'},
    {id: 5, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'}
  ]

  const local_items = [
    {src: '/banner_carousel.png'},
    {src: '/Header/logo_transp.png'},
    {src: '/Header/logo_transp.png'}
  ]

  return (  

    <div className={styles.background}>
      <Header />
      <div className={styles.bg2}>
        <Carousel autoPlay infiniteLoop
                  dynamicHeight
                  emulateTouch
                  useKeyboardArrows
                  showThumbs={false} 
                  showStatus={false}
                  className={styles.carousel}>
          {local_items.map((item, index) => <Image key={index} className={styles.image} src={item.src} width="800px" height="500px"/>)}
        </Carousel>
      </div>
      <div className={styles.title_bar}>
        <h2 className={styles.text_title}>Últimas notícias</h2>
      </div>
      <ul className={styles_n.ul}>                
                { noticias_list.map( ({titulo, dia, mes, ano, noticia, img_src, link, links, images, youtube}, index) => 
                    index < 3 && (
                    <Link href={{ pathname: link, query: {titulo, dia, mes, ano, noticia, img_src, link, links, images, youtube}}} key={index}>
                        <a className={styles_n.a}>
                            <li className={styles_n.li}>
                                <Image className={styles_n.image}  src={`/noticias/${img_src}`} width={250} height={150}/><br/>
                                <span className={styles_n.title_notice}>{titulo}</span><br/>
                                <span className={styles_n.data_notice}>{dia}/{mes}/{ano}</span>
                            </li>
                        </a>
                    </Link>)) }                
            </ul>
      <div className={styles.title_bar2}>
        <h2 className={styles.text_title}>Últimos artigos</h2>
      </div>
      <ul className={styles.ul2}>
        {articles_list.map(
          ({nome, autores, publicador, versao, paginas, ano, link }, index) =>
            index < 3 && (
              <li key={index}><Item nome = {nome} autores = {autores} publicador = {publicador} versao = {versao} paginas = {paginas} ano = {ano} link = {link}/></li>
            )
        )}
      </ul>
      <Footer />
    </div>
  );
}
