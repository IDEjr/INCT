import Image from 'next/image'

import Style from '../../styles/footer.module.css'

export default function Footer() {
  return (
        
    <div className={Style.componente}>
      <div className={Style.imagem}><Image src="/footer/mapa_icon_3.png" width={387*0.3} height={372*0.3}/></div>
      <div  className={Style.componente2}>
        <div className={Style.componente_interno}>
          <span className={Style.titulo}>Onde nos encontrar</span><br/>
          <div className={Style.linha}/><br/>
          <div className={Style.descricao}>
            <span>Universidade Federal de Santa Catarina
            <br/>Departamento de Química
            <br/>Campus Universitário Trindade - C.P. 476
            <br/>Florianópolis, SC 88040-900</span>          
          </div>
        </div>
        <div>
          <div className={Style.componente_interno}>
            <span className={Style.titulo}>Horario de funcionamento:</span><br/>
            <div className={Style.linha}/><br/>
            <div className={Style.descricao}>
              <span>Seg. - Sex :  9:00 - 17:00</span>          
            </div>
          </div>
        </div>
      </div>

      <div  className={Style.componente2}>
        <div className={Style.componente_interno}>
          <span className={Style.titulo}>Contato</span><br/>
          <div className={Style.linha}/><br/>
          <div className={Style.descricao}>
            <span>inctcatalise2016@gmail.com
            <br/>Telefones:
            <br/>Secretária Executiva: 
            <br/>Andezza Rozar - (48) 3721-6849
            <br/>Coordenador:
            <br/>Hugo Alejandro Gallardo Olmedo - (48) 3721-9544</span>          
          </div>
        </div>
        <div className={Style.componente_interno}>
          <span className={Style.titulo}>Siga-nos</span><br/>
          <div className={Style.linha}/><br/>
          <div className={Style.icon_maginless}>
            <a href='http://www.youtube.com.br'><Image src="/footer/youtube_icone_3.png" height={36} width={36}/></a>
          </div>
          <div className={Style.icon}>
            <a href='http://www.facebook.com.br'><Image src="/footer/facebook_icone_2.png" height={36} width={36}/></a>
          </div>
        </div>
      </div>
      
      <div  className={Style.componente2}>
        <span className={Style.titulo}>Órgãos Financiadores</span>
        <div className={Style.linha}/>
        <div className={Style.componente_interno}>
          <div className={Style.imagens}>
            <div className={Style.icon_maginless}>
              <a href='http://www.google.com.br'><Image src="/footer/capes_logo_borda.png" height={70} width={70*3744/1436}/></a>
            </div> 
            <div className={Style.icon_maginless}>
              <a href='http://www.google.com.br'><Image src="/footer/cnpq_logo_borda.png" height={54} width={54*2406/810}/></a>
            </div>
          </div>
          <div className={Style.icon_maginless}>
            <a href='http://www.google.com.br'><Image src="/footer/fapesc_logo_borda.png" height={65} width={65*1629/495}/></a>
          </div>
        </div>         
      </div>
      
        <div className={Style.sign}>
          <a href='http://www.google.com.br'><Image src="/footer/ide_logo_borda.png" height={59} width={127}/></a>
        </div>
    </div>

  )
}