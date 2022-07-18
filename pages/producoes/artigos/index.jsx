import react, { useState } from 'react';

import style from './artigos.module.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Box from '../../components/main_box'
import Item from '../../components/item_artigos';
import Search_Box from '../../components/search_box';
import Err from '../../components/error_msg'
import PaginatedItems from '../../components/paginated_items';

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
                {itens.length > 0 ? 
                    <PaginatedItems itemsPerPage={5} items={itens} type={'artigos'}/>
                    : <Err msg='Desculpe, mas não encontramos nenhum artigo para essa pesquisa!'/>}
            </Box>
            <Footer/>            
        </>
    );
}
