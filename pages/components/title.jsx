import style from './../../styles/title.module.css'

export default function Title(props) {
    let color, title;

    if(!props.title) title = 'Titulo';
    else title = props.title;

    if(!props.color) color = '#6699FE';
    else color = props.color;

    return(        
        <span className={style.title} style={{backgroundColor: `${color}`}}>{title}</span>        
    )
}