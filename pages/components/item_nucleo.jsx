import React,{ useState } from "react";
import Link from "next/link";
import Image from 'next/image';

import Style from '../../styles/item_nucleos.module.css';

export default function item_Nucleo(props){

    return(
        <div className={Style.item_Lista}>
            <Link href={{ pathname: `/nucleos/${props.link}`, query: { title:props.title }}}>
                <a className={Style.a}>                    
                    <span className={Style.title_Img}>{props.title}</span>
                    <span className={Style.imagem}>
                        <img src={`/posts/nucleos/${props.logo}`} width={"100%"}/>
                    </span>
                </a>
            </Link>
        </div>
    );
}