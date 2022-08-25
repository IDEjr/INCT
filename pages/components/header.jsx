import react, { useState, useContext, useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

import logo from '/public/images/header/logo_transp.png';
import menu_icon from '/public/images/header/menu_icon.png';
import style from '/styles/header.module.css';

const googleTranslateElementInit = () => {

  return new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages : "en,es,pt,zh-TW", // include this for selected languages
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  },
  'google_translate_element');

}

export default function Header() {

  const [ menu_View, setMenu_View ] = useState(false);
  
  function i_menu()
  {
    if(menu_View)
    {
      return(
        <nav className={style.navbar_imenu}>
          <div className={style.box_imenu}>
            <Link href='/'><a className={style.item_menu}>Home</a></Link>
            <Link href='/nucleos'><a className={style.item_menu}>Núcleos</a></Link>
            <Link href='/divulgacao_cientifica'><a className={style.item_menu}>Divulgação Científica</a></Link>
            <Link href='/noticias'><a className={style.item_menu}>Notícias</a></Link>
            <Link href='/producoes'><a className={style.item_menu}>Produções</a></Link>
            <Link href='/sobre'><a className={style.item_menu}>Sobre</a></Link>
          </div>
        </nav>
      );
    }        
  }

  var repeticao = 0;

  useEffect(() => {
      if(repeticao > 0) return;
      var addScript = document.createElement('script');
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
      repeticao++;
  }, [])  

  return (
    <>
    <Head>
      <title>INCT</title>
      <link rel="icon" href="/images/header/icon_site.png" type="image/icon type"></link>
    </Head>
    <div className={style.header}>
      <div className={style.logo}>
        <Link href='/'><a><Image src={logo} width={218*0.8} height={139*0.8} className={style.image}/></a></Link>
        <div id="google_translate_element"/>
      </div>
      
        <nav className={style.navbar}>
            <Link href='/'><a className={style.button}>Home</a></Link>
            <Link href='/nucleos'><a className={style.button}>Núcleos</a></Link>
            <Link href='/divulgacao_cientifica'><a className={style.button}>Divulgação Científica</a></Link>
            <Link href='/noticias'><a className={style.button}>Notícias</a></Link>
            <Link href='/producoes'><a className={style.button}>Produções</a></Link>
            <Link href='/sobre'><a className={style.button_borderless}>Sobre</a></Link>
        </nav>
        <div  className={style.menu}>
          <Image src={menu_icon} width={48} height={48} onClick={() => setMenu_View(!menu_View)}/>
        </div>
    </div>    
    <div className={style.line_green}></div>
    <div className={style.line_blue}></div> 
    <div className={style.line_yellow}></div>
    {i_menu()}
    </>
  )
}