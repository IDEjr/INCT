import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import logo from '../../public/logo_transp.png';
import style from '../../styles/header.module.css';

export default function Header() {
  return (
    <>
    <div className={style.header}>
      <div className={style.logo}>
        <Image src={logo} width={218*0.8} height={139*0.8} className={style.image}/>   
      </div>
      <nav className={style.navbar}>
        <a className={style.button} href='/'>Home</a>
        <a className={style.button} href='/galeria'>Galeria</a>
        <a className={style.button} href='/nucleos'>Núcleos</a>
        <a className={style.button} href='/noticias'>Notícias</a>
        <a className={style.button} href='/artigos'>Artigos</a>
        <a className={style.button} href='/sobre'>Sobre</a>
      </nav>      
    </div>  
    <div className={style.line_green}></div>
    <div className={style.line_blue}></div> 
    <div className={style.line_yellow}></div> 
    </>
  )
}