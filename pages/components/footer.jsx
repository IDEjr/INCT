import react from 'react'
import Image from 'next/image'
import Link from 'next/link'

import style from '../../styles/footer.module.css'

export default function Footer() {
  return (
    <div  className={style.box_all}>
      <div className={style.box_footer}>
        <div className={style.box_interna}>
          <div className={style.box_imagem}>
            <Link href="https://www.google.com/maps/place/Departamento+de+Qu%C3%ADmica+-+UFSC/@-27.5985254,-48.5257494,17z/data=!3m1!4b1!4m5!3m4!1s0x952738549f9be311:0x4e545dfbc9639aec!8m2!3d-27.5985678!4d-48.5234421">
              <a>
                <Image src="/footer/map_icon.png" width="141px" height="122px"/>
              </a>        
            </Link>           
          </div>
          <div  className={style.box_interna_2}>
            <span className={style.titulo}>Onde nos encontrar</span>
            <div className={style.descricao}>
              <span>Universidade Federal de Santa Catarina
              <br/>Departamento de Química
              <br/><br/>Campus Universitário Trindade - C.P. 476
              <br/>Florianópolis, SC 88040-900</span>          
            </div>
          </div>
        </div>
        <div className={style.box_interna}>
          <div  className={style.box_interna_2}>
            <span className={style.titulo}>Contato</span>
            <div className={style.descricao}>
              <span>email
              <br/>inctcatalise2016@gmail.com
              <br/><br/>Secretária Executiva 
              <br/>Andezza Rozar<br/>(48) 3721-6849
              <br/><br/>Coordenador
              <br/>Hugo Alejandro Gallardo Olmedo<br/>(48) 3721-9544</span>
            </div>
          </div>
          <div  className={style.box_interna_2}>
            <span className={style.titulo}>Horario de funcionamento</span>
            <div className={style.descricao}>
              <span>Seg. - Sex :  9:00 - 17:00</span>          
            </div>
          </div>                    
        </div>
        <div className={style.box_interna}>
          <div  className={style.box_interna_2}>
            <span className={style.titulo}>Órgãos Financiadores</span>
            <Link href='http://www.google.com.br'><a><Image src="/footer/capes_logo_borda.png" height={70} width={70*3744/1436}/></a></Link>
            <Link href='http://www.google.com.br'><a><Image src="/footer/cnpq_logo_borda.png" height={54} width={54*2406/810}/></a></Link>
            <Link href='http://www.google.com.br'><a><Image src="/footer/fapesc_logo_borda.png" height={65} width={65*1629/495}/></a></Link>
          </div>
          <div  className={style.box_interna_2}>
            <span className={style.titulo}>Siga-nos</span>
            <div className={style.redes}>
              <Link href='http://www.youtube.com.br'><a className={style.icon_redes}><Image src="/footer/youtube_icone_3.png" height={36} width={36}/></a></Link>
              <Link href='http://www.facebook.com.br'><a className={style.icon_redes}><Image src="/footer/facebook_icone_2.png" height={36} width={36}/></a></Link>
            </div>
          </div>
        </div>        
      </div>
      <div className={style.box_assinatura}>
        <span className={style.text_assinatura}>Produzido por</span>
        <Link href='http://www.google.com.br'><a><Image src="/footer/logo_branco.png" height={59} width={127}/></a></Link>
      </div>
    </div>

  )
}