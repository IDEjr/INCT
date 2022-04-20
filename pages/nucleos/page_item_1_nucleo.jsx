import style from './nucleos.module.css';

function page_nucleo(props) {
    return(
        <div className={style.filler}>
          <h1 className={style.title_page1}>
            {props.titulo}
          </h1>
          <h2 className={style.subtitle_page1}>
            {props.subtitulo}
          </h2> 
        </div>
    );
}

export default page_nucleo;