import react, { useState } from 'react';

import style from '../../styles/artigos.module.css';
import Item from '../components/item_artigo';

const articles_list = require('./artigos.json');

export default function Artigos(){

    const [ itens, setItens ] = useState(articles_list);

    function handleInputDate(input)
    {
        setItens(articles_list.filter(({key, nome, ano, link}) => { if(input == ano || input == ''){ return true; } return false; }));

    }

    return(
        <>
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
            
        </>
    );
}
