import react from 'react';
import Link from 'next/link';
import Image from 'next/image';

import style from '../../styles/item_producao.module.css';


export default function item_Producao(props){

    if(!props.link ||
       !props.nome ||
       !props.src) return <></>;

    return (        
        <Link href={props.link}>
            <a className={style.boxItem}>
                <Image src={props.src} width={'200px'} height={'200px'}/>
                <span>{props.nome}</span>
            </a>
        </Link>
    );
}