import React,{ useState } from "react";
import Link from "next/link";
import Image from 'next/image';

import Style from './galeria.module.css';

export default function item_Galeria(props){

    let l = props.link;

    let w, h;
    const size = 152;
    const normal_height = 121; // container - texto - margin

    if(normal_height*props.w/props.h < size) {
        w = normal_height*props.w/props.h;
        h = normal_height;
    } else {
        w = size;
        h = size*props.h/props.w;
    }

    return(
        <Link href={{ pathname: props.link, query: { teste:"teste" }}}>
            <a className={Style.a}>
                <span className={Style.imagem}>
                    <Image src={props.logo} width={w} height={h}/>
                </span>
                <span className={Style.title_Img}>{props.title}</span>
            </a>
        </Link>
    );
}