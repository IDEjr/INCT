import react, { useState } from 'react';

import style from '../../styles/artigos.module.css';

import Header from '../components/header';
import Item from '../components/item_artigo';
import Footer from '../components/footer';

const articles_list = require('./artigos.json');

export default function Artigos(){

    const [ itens, setItens ] = useState(articles_list);
    
    function handleInputDate(inputDate)
    {
        setItens(articles_list.filter(({key, nome, ano, link}) => { if(inputDate == ano || inputDate == ''){ return true; } return false; }));

    }

    return (
        <>
            <div>
                <Header/>
            </div>            

            <div className={style.search_bar}>
                <input className={style.search} placeholder='Pesquisa por data, ex: 2009' onChange={e => { handleInputDate(e.target.value) }} />
            </div>

            <div className={style.title_bar}>
                <span className={style.text_name_title}>Nome dos Artigos</span>
                <span className={style.text_year_title}>Ano</span>
            </div>
            
            <ul className={style.ul}>                
                { itens.map( ({key, nome, ano, link}) => <li key={key}><Item nome = {nome} ano = {ano} link = {link}/></li>) }                
            </ul>

            <div>
                <Footer/>
            </div> 
            
        </>
    );
}
