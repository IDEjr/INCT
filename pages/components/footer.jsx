import react from 'react'
import Image from 'next/image'
import Link from 'next/link'

import style from '../../styles/footer.module.css'

export default function Footer(props) {
  return (
    <div  id={props.id} className={style.box_all}>
      <div className={style.box_footer}>
        <div className={style.box_interna}>
          <div className={style.box_imagem}>
            <Link href="https://www.google.com/maps/place/Departamento+de+Qu%C3%ADmica+-+UFSC/@-27.5985254,-48.5257494,17z/data=!3m1!4b1!4m5!3m4!1s0x952738549f9be311:0x4e545dfbc9639aec!8m2!3d-27.5985678!4d-48.5234421">
              <a>
                <Image src="/footer/map-icon-white.png" width={140} height={140} layout="fixed"/>
              </a>        
            </Link>           
          </div>
          <div className={style.box_interna_2}>
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
              <span>E-mail
              <br/>inctcatalise2016@gmail.com
              <br/><br/>Secretária Executiva 
              <br/>Andezza Rozar<br/>(48) 3721-6849
              <br/><br/>Coordenador
              <br/>Hugo Alejandro Gallardo Olmedo<br/>(48) 3721-9544</span>
            </div>
          </div>
          <div  className={style.box_interna_2}>
            <span className={style.titulo}>Horário de funcionamento</span>
            <div className={style.descricao}>
              <span>Seg. - Sex. :  9:00 - 17:00</span>          
            </div>
          </div>                    
        </div>
        <div className={style.box_interna}>
          <div  className={style.box_interna_2}>
            <span className={style.titulo}>Órgãos Financiadores</span>
            <Link href='http://www.capes.gov.br'><a className={style.espaco_imagem}>
              <Image src="/footer/capes_logo_borda.png" height={70} width={70*3744/1436}/>
            </a></Link>
            <Link href='https://www.gov.br/cnpq/pt-br'><a className={style.espaco_imagem}>
              <Image src="/footer/cnpq_logo_borda.png" height={54} width={54*2406/810}/>
            </a></Link>
            <Link href='http://www.fapesc.sc.gov.br'><a className={style.espaco_imagem}>
              <Image src="/footer/fapesc_logo_borda.png" height={65} width={65*1629/495}/>
            </a></Link>
          </div>
          <div  className={style.box_interna_2}>
            <span className={style.titulo}>Siga-nos</span>
            <div className={style.redes}>
              <Link href='https://www.youtube.com/channel/UC0M9dYkAUJbOJdEJoiVNcfQ'><a className={style.icon_redes}><Image src="/footer/youtube_icone_3.png" height={36} width={36}/></a></Link>
              <Link href='https://www.instagram.com/inct.catalise/'><a className={style.icon_redes}><Image src="/footer/instagram_icone_4.png" height={28} width={28}/></a></Link>
            </div>
          </div>
        </div>        
      </div>
      <div className={style.box_assinatura}>
        <span className={style.text_assinatura}>Desenvolvido por</span>
        <Link href='https://www.idejr.com.br'><a className={style.logo}><Image src="/footer/logo_branco.png" height={59} width={127}/></a></Link>
      </div>
    </div>

  )
}