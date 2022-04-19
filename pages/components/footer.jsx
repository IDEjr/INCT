import Image from 'next/image'

import Style from '../../styles/footer.module.css'

export default function Footer() {
  return (
        
    <div className={Style.componente}>
      <div className={Style.imagem}><Image src="/footer/map_icon.png" height={100} width={100}/></div>
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
            <a href='http://www.google.com.br'><Image src="/footer/youtube_icon.png" height={36} width={36}/></a>
          </div>
          <div className={Style.icon}>
            <a href='http://www.google.com.br'><Image src="/footer/blog_icon.png" height={36} width={36}/></a>
          </div>
          <div className={Style.icon}>
            <a href='http://www.google.com.br'><Image src="/footer/facebook_icon.png" height={36} width={36}/></a>
          </div>
        </div>
      </div>
      
      <div  className={Style.componente2}>
        <div className={Style.componente_interno}>
          <span className={Style.titulo}>Nossos parceiros</span><br/>
          <div className={Style.linha}/><br/>
          <div className={Style.icon_maginless}>
            <a href='http://www.google.com.br'><Image src="/footer/parceiros1.png" height={50} width={391}/></a>
          </div>
          </div>
          <div className={Style.icon_maginless}>
            <a href='http://www.google.com.br'><Image src="/footer/parceiros2.png" height={59} width={127}/></a>
          </div>          
        </div>
      
        <div className={Style.sign}>
            <a href='http://www.google.com.br'><Image src="/footer/ide_icon.png" height={59} width={127}/></a>
          </div>
    </div>

  )
}