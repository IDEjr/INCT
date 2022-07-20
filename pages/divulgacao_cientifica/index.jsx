import react from 'react';
import Image from 'next/image'
import Link from "next/link";

import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Box from '../components/main_box';
import Item from '../components/item_divulgacao'

import { handleJSONfiles } from '../../utils/postHandler';


export function getStaticProps() {
    const divulgacao = handleJSONfiles('./public/posts/divulgacao');
  
    return {
      props: { divulgacao },
    };
}

export default function divulgacao_Cientifica(props){

    let { divulgacao } = props;

    return (
        <>
            <Header/>
            <Title title='Divulgação Científica' color='#FAC70A' />
            <Box invert>
                { divulgacao.map( ({titulo, dia, mes, ano, img_src, fileName}, index) => 
                        <Item key={index} titulo={titulo} dia={dia} mes={mes} ano={ano} img_src={img_src} link={`/divulgacao_cientifica/${fileName}`}  />
                    ) }
            </Box>
            <Footer/>
        </>
    );
}