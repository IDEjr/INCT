import React,{ useState } from "react";
import Link from "next/link";
import Image from 'next/image';

import Style from '../../styles/item_nucleos.module.css';

export default function item_Nucleo(props){

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
        <div className={Style.item_Lista}>
            <Link href={{ pathname: `/nucleos/${props.link}`, query: { title:props.title }}}>
                <a className={Style.a}>                    
                    <span className={Style.title_Img}>{props.title}</span>
                    <span className={Style.imagem}>
                        <Image src={`/posts/nucleos/${props.logo}`} width={"150%"} height={"150%"}/>
                    </span>
                </a>
            </Link>
        </div>
    );
}