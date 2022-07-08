import react from 'react';
import Link from 'next/link';
import Image from 'next/image';

import style from '../../styles/search_box.module.css';


export default function search_box(props){

    if(!props.placeHolder ||
       !props.func) return <></>;

    return(
        <div className={style.box_search}>
            <input className={style.search} placeholder={props.placeHolder} onChange= {props.func}/>
        </div>
    )
}