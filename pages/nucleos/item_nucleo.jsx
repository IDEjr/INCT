import { useState } from 'react';
import style from './nucleos.module.css';

function item_nucleo(props) {
    
    const [componente, setComponent] = useState(props.default);

    return(
        <div onMouseOver = {() => {
                setComponent(props.hovered);
            }}
            onMouseLeave = {() => {
                setComponent(props.default);
            }}
            style={{
                backgroundImage: `url(${props.fundo})`,
                backgroundSize: 'cover'
            }}
            className={style.nucleo}>
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
        </div>
    );

}

export default item_nucleo;