import react from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title'
import Box from '../components/main_box';
import Item from '../components/item_producao';


export default function Producoes(){

    let links = [{nome: "Artigos", link: '/producoes/artigos', src: '/images/producoes/artigos_icon.png'}, 
                 {nome: "Livros", link: '/producoes/livros', src: '/images/producoes/livros_icon.png'},
                 {nome: "Patentes", link: '/producoes/patentes', src: '/images/producoes/patente_icon.png'}];
    //console.log(links);

    return (
        <>
            <Header/>
            <Title title="Produções"/>
            <Box invert>
                {links.map( ({ nome, link, src }, index) => 
                    <Item key={index} nome={nome} link={link} src={src} />
                )}
            </Box>                        
            <Footer/>
        </>
    );
}