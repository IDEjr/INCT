import React from "react";
import Link from "next/link";
import Image from 'next/image';

import Style from './galeria.module.css';

export default function item_Galeria(props){

    return(
        /*<Link href={{ pathname: props.link, query: { id: "test" }}}>*/
        <Link href={props.link}>
            <a className={Style.a}>
                <Image src={props.logo} width="100vw" height="100vw"/>
                <span className={Style.title_Img}>{props.title}</span>
            </a>
        </Link>
    );
}