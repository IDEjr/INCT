import React from 'react';
import react, { useState } from 'react';

import { handleJSONfiles } from '../../utils/postHandler';
import ReactMarkdown from 'react-markdown';

import Header from '../components/header';
import Item from './item_areas';
import Footer from '../components/footer';

import style from './sobre.module.css';

export function getStaticProps() {
    
    const areas_list = handleJSONfiles('./public/posts/sobre/areas');    
    const sobre = require('../../public/posts/sobre/descricao/descricao.json');
  
    return {
      props: { areas_list, sobre },
    };
}

export default function Sobre(props) {

    let { areas_list, sobre } = props;

    const [ itens, setItens ] = useState(areas_list);

    return (
        <div className={style.background}>
            <Header/>
            <div className={style.margin} />

            <h1 className={style.title}>Missão</h1>
            <div className={style.box}>
                <div className={style.mission}>
                    <ReactMarkdown children={sobre.descricao} className={style.text}/>
                </div>
            </div>


            <h1 className={style.title}>Áreas de Atuação</h1>
            <div className={style.box}>
                <ul className={style.area_list}>                
                    { itens.map( ({key, imagem, imagemLar, imagemAlt, titulo, texto}, index) => <li key={index}><Item imagem = {imagem} width = {imagemLar} height = {imagemAlt} titulo = {titulo} texto = {texto}/></li>) }                
                </ul>
            </div>


            <h1 className={style.title}>Resultados Preliminares</h1>
            <div className={style.box}>
                <div className={style.options}>
                    <a href='/about/resultados_preliminares.pdf' target="_blank" className={style.button} >Resultados Preliminares</a>
                    <a href='/about/preliminary_results.pdf' target="_blank" className={style.button} >Preliminary Results</a>
                </div>
            </div>
            <div className={style.margin_bottom} />
            <Footer/>
        </div>
    )
}