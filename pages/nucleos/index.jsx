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
  
  return(
    <>
      <Header/>
      <Title title="Núcleos" color="#FAC70A"/>
      <Box invert>
        { props.list_Image.map( ({title, link, logo}, index) => 
            <Item key={index} title={title} logo={logo} link={link}/>
        )}
      </Box>
      <Footer/>
    </>     
  )
}