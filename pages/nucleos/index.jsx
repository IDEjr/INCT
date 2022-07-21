import React from "react";

import Header from './../components/header';
import Title from './../components/title';
import Box from './../components/main_box';
import Footer from './../components/footer';

import Item from '../components/item_nucleo';

import { handleJSONfiles } from '../../utils/postHandler';

export function getStaticProps() {

    const list_Image = handleJSONfiles('./public/posts/nucleos');
  
    return {
      props: { list_Image },
    };
}

export default function nucleos(props){
  
    let list_Image = props.list_Image
    
    list_Image.sort((a,b) => b.list_pesquisadores.length - a.list_pesquisadores.length)
    list_Image = list_Image.filter((x) => x.list_pesquisadores.length != 0)

    return(
        <>
          <Header/>
          <Title title="Núcleos" color="#FAC70A"/>
          <Box invert>
            { list_Image.map( ({title, link, logo, brasaoAlt, brasaoLar}, index) => 
                <Item key={index} title={title} logo={logo} link={link} w={brasaoLar} h={brasaoAlt}/>
            )}
          </Box>
          <Footer/>
        </>     
    )
}