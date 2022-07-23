import react from 'react';
import Image from 'next/image'
import Link from "next/link";

import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Box from '../components/main_box';
import Item from '../components/item_noticias'

import { handleJSONfiles } from '../../utils/postHandler';
import { compara_data } from '../../utils/compare';


export function getStaticProps() {
    const noticias = handleJSONfiles('./public/posts/noticias');
  
    return {
      props: { noticias },
    };
}

export default function Noticias(props){


    return (
        <>
            <Header/>
            <Title title='Notícias' color='#87B93F' />
            <Box invert>
                { props.noticias.sort((a,b) => compara_data(b,a)).map( ({titulo, dia, mes, ano, img_src, fileName}, index) => 
                        <Item key={index} titulo={titulo} dia={dia} mes={mes} ano={ano} img_src={img_src} link={`/noticias/${fileName}`}  />
                    ) }
            </Box>
            <Footer/>
        </>
    );
}