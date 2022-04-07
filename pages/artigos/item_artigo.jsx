import style from './artigos.module.css';

export default function item_Artigo(props){
    return(

        <a href= {props.link}>
            <div className={style.item}>            
                <span className={style.text_name_item}>{props.nome}</span>
                <span className={style.text_year_item}>{props.ano}</span>            
            </div>
        </a>
    );
}