import react, { useState } from 'react';
import style from './artigos.module.css';

export default function item_Artigo(props){
    
    const item_default =    <div className={style.item}>
                                <span className={style.text_name_item}>{props.nome}</span>
                                <span className={style.text_year_item}>{props.ano}</span>
                            </div>


    const item_hover =      <div className={style.item_hover}>
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
                                        { props.autores.map( (nome) => <li key={nome}>{nome}</li>) }
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>

    
    const [ item_current, setItem_current ] = useState(item_default);
    

    return(        
        <a href= {props.link}>
            <div                
                onMouseOver = {() => setItem_current(item_hover)}
                onTouchStart = {() => setItem_current(item_hover)}
                onTouchEnd = {() => setItem_current(item_default)}
                onMouseLeave = {() => setItem_current(item_default)}> {item_current}
            </div>
        </a>
    );
}