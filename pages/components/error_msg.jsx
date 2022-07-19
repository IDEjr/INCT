import react from 'react';

import style from './../../styles/error_msg.module.css';


export default function error_Msg(props){
    
    return(        
        <div className={style.message}>
            {props.msg}
        </div>
    )
}