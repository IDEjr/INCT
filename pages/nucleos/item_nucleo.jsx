import { useState } from 'react';
import style from './nucleos.module.css';

function item_nucleo(props) {
    
    const [componente, setComponent] = useState(props.default);
    
    return(
        <div className={style.nucleo} style={{
            backgroundImage: `url(${props.fundo})`,
            backgroundSize: 'cover'
          }}
            onMouseOver = {() => setComponent(props.hovered)}
            onMouseLeave = {() => setComponent(props.default)}>
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