import style from './nucleos.module.css';

function page_nucleo(props) {
    return(
        <div className={style.fundo} style={{
          backgroundImage: `url(${props.fundo})`,
          backgroundSize: 'cover'
        }}>
          <div className={style.brasao}>
            {props.brasao}
          </div>
          <div className={style.conteudo}>
            <h1 className={style.title_page1}>
              {props.titulo}
            </h1>
            <h2 className={style.subtitle_page1}>
              {props.subtitulo}
            </h2>
            
            <p className={style.description_page2}>
              {props.descricao}
            </p>
          </div>
        </div>
    );
}

export default page_nucleo;