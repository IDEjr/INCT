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
    {src: '/Header/logo_transp.png'},
    {src: '/Header/logo_transp.png'},
    {src: '/Header/logo_transp.png'}
  ]

  const local_items1 = [
    {src: '/Covers_INCT/Capa_ChemistrySelect2017_page-0001.jpg'},
    {src: '/Covers_INCT/Catalysis 2018_page-0001.jpg'},
    {src:'/Covers_INCT/ChemCatChem - 2020 - Braga - Cover Feature Structure and activity of supported bimetallic NiPd nanoparticles influence of-1.png'},
    {src:'/Covers_INCT/Chemistry A European J - 2018 - de Carvalho - Front Cover Combination of Aryl Diselenides Hydrogen Peroxide and (2)-1.png'},
    {src:'/Covers_INCT/ChemSusChem - 2019 - Gon alves - Cover Feature Efficient Electrocatalytic CO2 Reduction Driven by Ionic Liquid Buffer‐Like(1)-1.png'},
    {src:'/Covers_INCT/Cover Catalysis Science and Tec 2019-1.png'},
    {src:'/Covers_INCT/Cover Catalysis Science and Tec 2020-1.png'},
    {src:'/Covers_INCT/Cover Chemical Society Rewiew2018-1.png'},
    {src:'/Covers_INCT/Cover Sustainable Chem and Eng 2022-1.png'},
    {src:'/Covers_INCT/Cover_ChemComm 2018-1.png'},
    {src:'/Covers_INCT/Cover_ChemComm 2019-1.png'},
    {src:'/Covers_INCT/Cover_Chemistry 2019-1.png'},
    {src:'/Covers_INCT/Cover_Organic and BiomolecularChemistry 2020-1.png'},
    {src:'/Covers_INCT/Euro J of Inorganic Chem - 2021 - Maluf - Cover Feature Zeolitic‐Imidazolate Framework Derived Intermetallic Nickel Zinc-1.png'},
    {src:'/Covers_INCT/European J Organic Chem - 2019 - Clerigu - Front Cover Rearrangement Reactions in Aza‐Vinylogous Povarov Products -1.png'}
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
      <div className={styles.bg3}>
        <Carousel autoPlay infiniteLoop
                  dynamicHeight
                  emulateTouch
                  useKeyboardArrows
                  showThumbs={false} 
                  showStatus={false}
                  className={styles.carousel}>
          {local_items1.map((item, index) => <Image key={index} className={styles.image} src={item.src} width="400px" height="450px"/>)}
        </Carousel>
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
