import react from 'react';

import style from './../../styles/item_livros.module.css';

import Link from "next/link";
import Image from 'next/image';

export default function item_Livros(props){
    if(!props.link ||
        !props.nome ||
        !props.width ||
        !props.src) return <></>;
    
    return(
        <Link href={props.link}>
            <a className={style.boxItem} style={{width:`${props.width}`}}>
                <Image src={props.src} width={'150px'} height={'200px'} />
                <div className={style.boxDescricao}>
                    <span>{props.nome}</span>
                </div>                               
            </a>
        </Link>
    )
}