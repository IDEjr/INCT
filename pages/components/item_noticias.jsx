import react from 'react';
import Image from 'next/image'
import Link from "next/link";

import Style from './../../styles/item_noticias.module.css';

export default function item_noticias(props){
    
    if(!props.titulo ||
       !props.img_src ||
       !props.link) return <></>;

    return(
        <Link href={props.link}>
            <a className={Style.a}>
                    <div className={Style.image_notice} style={{
                        backgroundImage: `url('/noticias/${props.img_src}')`, 
                        backgroundPosition: "center", 
                        backgroundSize: "cover", 
                    }}>
                    </div>
                    { props.dia && props.mes && props.ano ?
                        <div className={Style.data_notice}>{`${props.dia}/${props.mes}/${props.ano}`}</div>
                                                    :
                        <div className={Style.data_notice}/>
                    }  
                    <div className={Style.title_notice}>{props.titulo}</div>
            </a>
        </Link>
    );
}