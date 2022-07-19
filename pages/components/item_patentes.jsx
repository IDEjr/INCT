import react from 'react';

import style from './../../styles/item_livros.module.css';

import Link from "next/link";
import Image from 'next/image';

export default function item_Patentes(props){
    if(!props.link ||
        !props.nome ||
        !props.width) return <></>;
    
    return(
        <Link href={`/posts/patentes/${props.link}`}>
            <a className={style.boxItem} style={{width:`${props.width}`}}>               
                <div className={style.boxDescricao}>
                    <span>{props.nome}</span>
                </div>                               
            </a>
        </Link>
    )
}