import style from './sobre.module.css';
import Image from 'next/image';

export default function item_Areas(props){
    return(
        <div className={style.area_item}>

            <div className={style.image_box}>              
                <Image src={props.imagem} width={180} height={180}/> 
            </div>


            <div className={style.text_box}>
                <p className={style.text}><b>{props.titulo}</b> {props.texto}</p>
            </div>

        </div>
    );
}