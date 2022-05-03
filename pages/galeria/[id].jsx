import React from "react";

import Header from './../components/header';
import Footer from './../components/footer';

export default function fotos(props){

    return(
        <div>
            <Header/>
            <div>{props.title}</div>
            <Footer/>
        </div>     
    )
}