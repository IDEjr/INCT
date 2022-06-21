import react, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Box from '../../components/main_box';
import Title from '../../components/title';
import Item from '../../components/item_livros';
import Search_Box from '../../components/search_box';

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
                {itens.map(({nome, link, src}, index)=>
                    <Item key={index} nome={nome} link={link} src={src} width="80vw"/>
                )}
            </Box>            
            <Footer/>            
        </>
    );
}
