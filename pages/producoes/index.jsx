import react, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import style from './producoes.module.css';

import Header from '../components/header';
import Footer from '../components/footer';


export default function Producoes(){

    const links = [{nome: "Artigos", link: '/producoes/artigos', src: '/producoes/artigos_icon.png'}, 
                   {nome: "Livros", link: '/producoes/livros', src: '/producoes/livros_icon.png'},
                   {nome: "Patentes", link: '/producoes/patentes', src: '/producoes/patente_icon.png'}];

    return (

        <div className={style.background}>

            <Header/>
            <span></span>
            <div className={style.boxProducoes}>
                <span className={style.title}>Produções</span>
                {links.map((i, index) => {
                    return (                    
                        <Link href={i.link} key={index}>
                            <a className={style.boxItem}>
                               <Image src={i.src} width={'200px'} height={'200px'}></Image>
                               <span>{i.nome}</span>
                            </a>
                        </Link>)
                })}
            </div>            
            <Footer/>
            
        </div>
    );
}
