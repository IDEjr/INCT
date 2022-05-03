import React from "react";
import Image from 'next/image';

import Style from './galeria.module.css';

export default function item_Galeria(props){
    return(        
        <a className={Style.a} href={props.link}>
            <Image src={props.logo} width="100vw" height="100vw"/>
            <span className={Style.title_Img}>{props.title}</span>
        </a>
    );
}