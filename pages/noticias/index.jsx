import react from 'react';
import Image from 'next/image'
import Link from "next/link";

import Header from '../components/header';
import Footer from '../components/footer';

import Style from './noticias.module.css';

import { handleJSONfiles } from '../../utils/postHandler';
import compara_data from '../components/compara_data';

export function getStaticProps() {
    const noticias = handleJSONfiles('./public/posts/noticias');
  
    return {
      props: { noticias },
    };
}

export default function Noticias(props){

    let { noticias } = props    ;
    for (var i = 0; i < noticias.length; i++) {
        if(noticias[i]['0'] != undefined)
            noticias[i] = noticias[i]['0']
        else
            noticias[i] = noticias[i]
    }
    console.log(noticias)

    noticias.sort(compara_data).reverse()

    return (
        
        <div className={Style.background}>
            <Header/>
            <div className={Style.title_bar}>
                <span className={Style.text_title}>Notícias</span>                
            </div>

            <ul className={Style.ul}>                
                { noticias.map( ({titulo, dia, mes, ano, noticia, img_src, link, images, youtube}, index) => 
                    <Link href={{ pathname: link, query: { titulo, dia, mes, ano, noticia, img_src, images, youtube }}} key={index}>
                        <a className={Style.a}>
                            <li className={Style.li}>
                                <div className={Style.image_notice} style={{
                                    backgroundImage: `url('/noticias/${img_src}')`, 
                                    backgroundPosition: "center", 
                                    backgroundSize: "cover", 
                                }}>
                                </div>
                                {`${dia}/${mes}/${ano}` !== "//" ?
                                    <div className={Style.data_notice}>{`${dia}/${mes}/${ano}`}</div>
                                                                 :
                                    <div className={Style.data_notice}>--/--/----</div>
                                }  
                                <div className={Style.title_notice}>{titulo}</div>
                            </li>
                        </a>
                    </Link>) }                
            </ul>
            <Footer/>            
        </div>
    );
}
