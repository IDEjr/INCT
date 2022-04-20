import style from './nucleos.module.css';

function page_nucleo(props) {
    return(
        <div>
          <div className={style.description_page2}>{props.p1}</div>
          <div className={style.description_page2}>{props.p2}</div>

          <div><a className={style.description_page2} href={props.link1} target="_blank"><b>{props.desc1}</b></a></div>
          <div><a className={style.description_page2} href={props.link2} target="_blank"><b>{props.desc2}</b></a></div>
        </div>
    );
}

export default page_nucleo;