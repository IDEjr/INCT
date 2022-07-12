import react from 'react';

import style from './../../styles/error_msg.module.css';


export default function item_Livros(props){
    
    return(        
        <div className={style.message}>
            Desculpe o incômodo, mas não encontramos a página solicitada.
        </div>
    )
}