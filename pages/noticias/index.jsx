import react from 'react';
import Image from 'next/image'
import Link from "next/link";

import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Box from '../components/main_box';

import Style from './noticias.module.css';

import { handleJSONfiles } from '../../utils/postHandler';


export function getStaticProps() {
    const noticias = handleJSONfiles('./public/posts/noticias');
  
    return {
      props: { noticias },
    };
}

export default function Noticias(props){

    let { noticias } = props;

    console.log(noticias);

    return (
        <>
            <Header/>
            <Title title='Notícias' color='#87B93F' />
            <Box invert>
                { noticias.map( ({titulo, dia, mes, ano, noticia, img_src, link, images, youtube}, index) => 
                    <Link href={{ pathname: link}} key={index}>
                        <a className={Style.a}>
                                <div className={Style.image_notice} style={{
                                    backgroundImage: `url('/noticias/${img_src}')`, 
                                    backgroundPosition: "center", 
                                    backgroundSize: "cover", 
                                }}>
                                </div>
                                { dia && mes && ano ?
                                    <div className={Style.data_notice}>{`${dia}/${mes}/${ano}`}</div>
                                                                :
                                    <div className={Style.data_notice}/>
                                }  
                                <div className={Style.title_notice}>{titulo}</div>
                        </a>
                    </Link>) }
            </Box>
            <Footer/>
        </>
    );
}
