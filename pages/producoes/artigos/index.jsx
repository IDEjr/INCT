import react, { useState } from 'react';

import style from './artigos.module.css';

import Header from '../../components/header';
import Item from './item_artigo';
import Footer from '../../components/footer';

const articles_list = require('./artigos.json');

export default function Artigos(){

    const [ itens, setItens ] = useState(articles_list);
    
    function handleInputDate(inputDate)
    {
        setItens(articles_list.filter(({key, nome, autores, publicador, versao, paginas, ano, link}) => { if(inputDate == ano || inputDate == ''){ return true; } return false; }));

    }

    return (

        <div className={style.background}>

            <Header/>
            <div className={style.box_artigos}>
                <span className={style.title}>Artigos</span>
                <div className={style.box_search}>
                    <input className={style.search} placeholder='Pesquisa por data, ex: 2009' onChange={e => { handleInputDate(e.target.value) }} />
                </div>
                <div className={style.box_list_title}>
                    <span className={style.name_list_title}>Nome dos Artigos</span>
                    <span className={style.year_list_title}>Ano</span>
                </div>
                <ul className={style.ul}>                
                    { itens.map( ({nome, autores, publicador, versao, paginas, ano, link}, index) => <li key={index}><Item nome = {nome} autores = {autores} publicador = {publicador} versao = {versao} paginas = {paginas} ano = {ano} link = {link}/></li>) }                
                </ul>
            </div>

            <Footer/>
            
        </div>
    );
}
