import React,{ useState } from "react";
import Link from "next/link";
import Image from 'next/image';

import Style from './galeria.module.css';

export default function item_Galeria(props){

    let l = props.link;
    const size = 150;
    // OBS: talvez dê pra colocar as imagens
    // sem ter que passar a largura e a altura delas

    return(
        <Link href={{ pathname: props.link, query: { teste:"teste" }}}>
            <a className={Style.a}>
                <Image src={props.logo} width="100vw" height="100vw"/>
                <span className={Style.title_Img}>{props.title}</span>
            </a>
        </Link>
    );
}