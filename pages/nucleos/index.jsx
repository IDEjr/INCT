import style from './nucleos.module.css';
import Image from 'next/image'

import Header from '../components/header';
import Item from './item_nucleo';
import Page from './page_item_nucleo';
import Footer from '../components/footer';

const lista_nucleos = require('./nucleos.json');

// NOTA: a fonte do texto está declarada no lugar certo?
function Nucleos() {
    return (
        <div className={style.background}>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>

          <Header/>
          
          <div className={style.title_bar}>
            <h1 className={style.title}>Núcleos</h1>
          </div>
          
          {lista_nucleos.map( ({key, fundo, brasaoSrc, brasaoLar, brasaoAlt, titulo, subtitulo, descricao}) => 
          <Item
            default={<Page fundo = {fundo}
                          brasao = {<Image src={brasaoSrc} height={130} width={130*brasaoLar/brasaoAlt}/>}
                          titulo = {titulo} subtitulo = {subtitulo}/>} 
            hovered={<Page fundo = {fundo}
                          brasao = {<Image src={brasaoSrc} height={130} width={130*brasaoLar/brasaoAlt}/>} 
                          descricao = {descricao}/>}
          />)}
          
          
          <Footer/>
        </div>
    );
}

export default Nucleos;