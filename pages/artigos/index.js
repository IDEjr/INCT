import style from './artigos.module.css';

export default function artigos(){
    return(
        <div className={style.background_global}>
            <div className={style.bar_title}>
                <div className={style.text_name_title}>Nome dos Artigos</div>
                <div className={style.text_year_title}>Ano</div>
            </div>
        </div>
    );
}