import React from 'react';
import react, { useState } from 'react';

import Header from '../components/header';
import Item from './item_areas';
import Footer from '../components/footer';

import style from './sobre.module.css';

const areas_list = require('./areas.json');

export default function Sobre() {

    const [ itens, setItens ] = useState(areas_list);

    return (
        <div className={style.background}>
            <Header/>
            <div className={style.margin} />

            <h1 className={style.title}>Missão</h1>
            <div className={style.box}>
                <div className={style.mission}>
                    <p className={style.text}>O INCT de Catálise em Sistemas Moleculares e Nanoestruturados (INCT-CMN) 
                        tem por finalidade a consolidação e promoção do desenvolvimento da área de 
                        catálise para as diversas atividades industriais e de pesquisa no país.</p>
                </div>
            </div>


            <h1 className={style.title}>Áreas de Atuação</h1>
            <div className={style.box}>
                <ul className={style.area_list}>                
                    { itens.map( ({key, imagem, imagemLar, imagemAlt, titulo, texto}) => <li key={key}><Item imagem = {imagem} width = {imagemLar} height = {imagemAlt} titulo = {titulo} texto = {texto}/></li>) }                
                </ul>
            </div>


            <h1 className={style.title}>Resultados Preliminares</h1>
            <div className={style.box}>
                <div className={style.options}>
                    <a href='/about/resultados_preliminares.pdf' target="_blank" className={style.button} >Resultados Preliminares</a>
                    <a href='/about/preliminary_results.pdf' target="_blank" className={style.button} >Preliminary Results</a>
                </div>
            </div>

            <Footer/>
        </div>
    )
}