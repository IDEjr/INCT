import react from 'react';
import Link from "next/link";
import style from './artigos.module.css';

export default function item_Artigo(props){
    
    return(
        <Link href= {props.link}>        
            <a>
                <div className={style.item}>
                    <span className={style.text_name_item}>{props.nome}</span>
                    <span className={style.text_year_item}>{props.ano}</span>
                    <div className={style.descricao_item}>
                        <div className={style.descricao_publicacao}>
                            <span className={style.texto_publicacao}>Publicador:<br/>{props.publicador}</span>
                            <span className={style.texto_publicacao}>Versão:<br/>{props.versao}</span>
                            <span className={style.texto_publicacao}>Páginas:<br/>{props.paginas}</span>
                            <span className={style.texto_publicacao}>Ano:<br/>{props.ano}</span>
                        </div>
                        <div  className={style.box_lista_autores} >
                            <span className={style.titulo_autores}>Autores:</span>
                            <ul className={style.lista_autores} >
                            { props.autores.map( (nome, index) => <li key={index}>{nome}</li>) }
                            </ul>
                        </div>                    
                    </div>
                </div>
            </a>
        </Link>
    );
}