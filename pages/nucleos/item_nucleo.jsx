import { useState } from 'react';
import style from './nucleos.module.css';
import Link from 'next/link';

function item_nucleo(props) {
    
    const [componente, setComponent] = useState(props.default);
    /* Dentro do <div>:
        onMouseOver = {() => {
            setComponent(props.hovered);
        }}
        onMouseLeave = {() => {
            setComponent(props.default);
        }}
    */

    return(
        <Link href={{ pathname: `/nucleos/${props.link}`, query: { title:props.title }}}>
            <a style={{
                backgroundImage: `url(${props.fundo})`,
                backgroundSize: 'cover'
            }} className={style.nucleo}>

                <div className={style.filtro}/>
                <div className={style.brasao}>
                    {props.brasao}
                </div>
                <div className={style.conteudo}>
                    {componente}
                </div>
                <div className={style.credito}>
                    <em><b>Foto: </b>{props.credito}</em>
                </div>

            </a>
        </Link>
    );

}

export default item_nucleo;