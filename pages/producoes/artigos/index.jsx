import react, { useState } from 'react';

import style from './artigos.module.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Box from '../../components/main_box'
import Item from '../../components/item_artigos';
import Search_Box from '../../components/search_box';
import Err from '../../components/error_msg'

import { handleJSONfiles } from '../../../utils/postHandler';

export function getStaticProps() {
    const artigos = handleJSONfiles('./public/posts/artigos');
  
    return {
      props: { artigos },
    };
}

export default function Artigos(props){

    let { artigos } = props;

    const [ itens, setItens ] = useState(artigos);
    
    function handleInputDate(inputDate)
    {
        setItens(artigos.filter(
            ({ nome, ano}) => 
                { 
                    if(nome.toUpperCase().includes(inputDate.toUpperCase()) || 
                                                         inputDate == ano || 
                                                         inputDate == '')
                    { return true; } 
                    return false; }));
    }   

    return (
        <>
            <Header/>
            <Title title='Artigos'/>
            <Box>
                <Search_Box placeHolder='Pesquisa por nome ou data' func={e => { handleInputDate(e.target.value) }} />
                <div className={style.box_list_title}>
                    <span className={style.name_list_title}>Nome dos Artigos</span>
                    <span className={style.year_list_title}>Ano</span>
                </div>            
                { itens.map( ({nome, autores, publicador, versao, paginas, ano, link}, index) => 
                    <Item key={index}  nome = {nome} autores = {autores} publicador = {publicador} versao = {versao} paginas = {paginas} ano = {ano} link = {link} width="80vw"/>) }
                {itens.length>0 ? 
                    itens.map( ({nome, autores, publicador, versao, paginas, ano, link}, index) => 
                        <Item key={index}  nome = {nome} autores = {autores} publicador = {publicador} versao = {versao} paginas = {paginas} ano = {ano} link = {link} width="80vw"/>)
                    : <Err msg='nenhum artigo para essa pesquisa!'/>}
            </Box>
            <Footer/>            
        </>
    );
}
