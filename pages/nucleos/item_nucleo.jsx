import { useState } from 'react';
import style from './nucleos.module.css';

function item_nucleo(props) {
    
    const [componente, setComponent] = useState(props.default);
    
    return(
        <div className={style.nucleo}
            onMouseOver = {() => setComponent(props.hovered)}
            onMouseLeave = {() => setComponent(props.default)}>
            {componente}
        </div>
    );

}

export default item_nucleo;