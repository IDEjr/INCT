import react, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Box from '../../components/main_box';
import Title from '../../components/title';
import Item from '../../components/item_patentes';
import Search_Box from '../../components/search_box';
import Err from '../../components/error_msg';

import { handleJSONfiles } from '../../../utils/postHandler';

export function getStaticProps() {
    const patentes = handleJSONfiles('./public/posts/patentes');
  
    return {
      props: { patentes },
    };
}

export default function Patentes(props){

    let { patentes } = props;
    
    const [ itens, setItens ] = useState(patentes);
    
    function handleInputDate(inputDate)
    {
        setItens(patentes.filter(
            ({ nome }) => 
                { if(nome.toUpperCase().includes(inputDate.toUpperCase()) ||
                                                         inputDate == '')
                    { return true; } 
                    return false; }));
    } 

    return (
        <>
            <Header/>
            <Title title="Patentes" />
            <Box>
                <Search_Box placeHolder='Pesquisa por nome' func={e => { handleInputDate(e.target.value) }} />
                {itens.length > 0 ?
                    itens.map(({nome, link}, index) =>
                            <Item key={index} nome={nome} link={link} width="80vw"/>)
                    : <Err msg='Desculpe, mas não encontramos nenhuma patente para essa pesquisa!'/>}                                    
            </Box>            
            <Footer/>            
        </>
    );
}