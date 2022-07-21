import react, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Box from '../../components/main_box';
import Title from '../../components/title';
import Item from '../../components/item_livros';
import Search_Box from '../../components/search_box';
import Err from '../../components/error_msg';
import PaginatedItems from '../../components/paginated_items';

import { handleJSONfiles } from '../../../utils/postHandler';

export function getStaticProps() {
    const livros = handleJSONfiles('./public/posts/livros');
  
    return {
      props: { livros },
    };
}

export default function Livros(props){

    let { livros } = props;
    
    const [ itens, setItens ] = useState(livros);
    
    function handleInputDate(inputDate)
    {
        setItens(livros.filter(
            ({ nome }) => 
                { if(nome.toUpperCase().includes(inputDate.toUpperCase()) ||
                                                         inputDate == '')
                    { return true; } 
                    return false; }));
    } 

    return (
        <>
            <Header/>
            <Title title="Livros" />
            <Box>
                <Search_Box placeHolder='Pesquisa por nome' func={e => { handleInputDate(e.target.value) }} />
                {itens.length > 0 ?
                    <PaginatedItems itemsPerPage={15} items={itens} type={'livros'}/>
                    : <Err msg='Desculpe, mas não encontramos nenhum livro para essa pesquisa!'/>}                
            </Box>            
            <Footer/>            
        </>
    );
}