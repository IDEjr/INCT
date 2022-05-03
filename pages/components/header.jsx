import react, { useState } from 'react';
import Image from 'next/image';

import logo from '../../public/logo_transp.png';
import menu_icon from '../../public/menu_icon.png';
import style from '../../styles/header.module.css';

export default function Header() {

  const [ menu_View, setMenu_View ] = useState(false);
  
  function i_menu()
  {
    if(menu_View)
    {
      return(
        <nav className={style.navbar_imenu}>
          <div className={style.box_imenu}>
            <a className={style.item_menu} href='/'>Home</a>
            <a className={style.item_menu} href='/galeria'>Galeria</a>
            <a className={style.item_menu} href='/nucleos'>Núcleos</a>
            <a className={style.item_menu} href='/noticias'>Notícias</a>
            <a className={style.item_menu} href='/artigos'>Artigos</a>
            <a className={style.item_menu} href='/sobre'>Sobre</a>
            </div>
        </nav>
      );
    }        
  }

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
            <a className={style.button_borderless} href='/sobre'>Sobre</a>
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