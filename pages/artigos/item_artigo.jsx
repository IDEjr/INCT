import react, { useState } from 'react';
import style from './artigos.module.css';

export default function item_Artigo(props){
    
    const item_default =    <>
                                <span className={style.text_name_item}>{props.nome}</span>
                                <span className={style.text_year_item}>{props.ano}</span>
                            </>


    const item_hover =      <>
                                <span className={style.text_name_item_hovered}>{props.nome}</span>                                
                                <div className={style.descricao_item}>
                                    <div className={style.descricao_publicacao} descricao_publicacao>
                                        <span className={style.texto_publicacao}>Publicador:<br/>{props.publicador}</span>
                                        <span className={style.texto_publicacao}>Versão:<br/>{props.versao}</span>
                                        <span className={style.texto_publicacao}>Páginas:<br/>{props.paginas}</span>
                                        <span className={style.texto_publicacao}>Ano:<br/>{props.ano}</span>
                                    </div>
                                    <div  className={style.box_lista_autores} >
                                        <span className={style.titulo_autores}>Autores:</span>
                                        <ul className={style.lista_autores} >
                                        { props.autores.map( (nome) => <li>{nome}</li>) }
                                        </ul>
                                    </div>
                                    
                                </div>
                            </>

    
    const [ item_current, setItem_current ] = useState(item_default);
    

    return(        
        <a href= {props.link}>
            <div className={style.item} 
                onMouseOver = {() => setItem_current(item_hover)}
                onMouseLeave = {() => setItem_current(item_default)}> {item_current}
            </div>
        </a>
    );
}