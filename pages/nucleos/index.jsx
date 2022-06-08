import style from './nucleos.module.css';
import Image from 'next/image'

import Header from '../components/header';
import Item from './item_nucleo';
import Page1 from './page_item_1_nucleo';
import Page2 from './page_item_2_nucleo';
import Footer from '../components/footer';

const lista_nucleos = require(`./nucleos.json`);

// NOTA: a fonte do texto está declarada no lugar certo?
function Nucleos() {
    return (
        <div className={style.background}>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>

          <Header/>
                    
          <span className={style.title}>Núcleos</span>          

          {lista_nucleos.map( ({fundo, brasaoSrc, brasaoLar, brasaoAlt, titulo, subtitulo,
                                p1, p2, link1, nome1, desc1, link2, nome2, desc2, credito, link}, index) => 
          <Item key = {index}
            fundo = {`/nucleos/main/${link}/${fundo}`}
            brasao = {<Image src={`/nucleos/main/${link}/${brasaoSrc}`} height={95*brasaoAlt/brasaoLar} width={95}/>}
            credito = {credito}
            default={<Page1 titulo = {titulo} subtitulo = {subtitulo}/>} 
            title = {titulo}
            link = {link}
          />)}
          
          
          <Footer/>
        </div>
    );
}

export default Nucleos;