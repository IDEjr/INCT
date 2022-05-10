import React from "react";
import Link from "next/link";
import Image from 'next/image';

import Style from './galeria.module.css';

export default function item_Galeria(props){

    const size = 185;

    return(
        /*<Link href={{ pathname: props.link, query: { id: "test" }}}>*/
        <Link href={props.link}>
            <a className={Style.a}>
                <Image src={props.logo} 
                       width={props.h < props.w ? size : size*props.w/props.h} 
                       height={props.h < props.w ? size*props.h/props.w : size}/>
                <span className={Style.title_Img}>{props.title}</span>
            </a>
        </Link>
    );
}