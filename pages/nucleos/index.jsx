import style from './nucleos.module.css';
import Image from 'next/image'

import Header from '../components/header';
import Item from './item_nucleo';
import Page1 from './page_item_1_nucleo';
import Page2 from './page_item_2_nucleo';
import Footer from '../components/footer';

function zip(rows) {
  return rows[0].map((_,c)=>rows.map(row=>row[c]))
}

// NOTA: a fonte do texto está declarada no lugar certo?
function Nucleos() {

  let lista_nucleos = require(`./nucleos.json`);
  let length_pesquisadores = []
  for(var i = 0; i < lista_nucleos.length; i++) {
    length_pesquisadores.push(require(`../../public/nucleos/pesquisadores/${lista_nucleos[i].link}/${lista_nucleos[i].link}.json`).length)
  }
  //console.log(length_pesquisadores)

  lista_nucleos = zip([lista_nucleos, length_pesquisadores])
  lista_nucleos.sort(function(a,b){return b[1] - a[1]})
  lista_nucleos = lista_nucleos.filter(function(value, index, arr){return value[1] != 0})
  //console.log(lista_nucleos)

    return (
        <div className={style.background}>
          <Header/>
                    
          <span className={style.title}>Núcleos</span>          

          <div className={style.todosNucleos}>
          {lista_nucleos.map( ([{fundo, brasaoSrc, brasaoLar, brasaoAlt, titulo, subtitulo, credito, link}, len], index) => 
          <Item key = {index}
            fundo = {`/nucleos/main/${link}/${fundo}`}
            brasao = {<Image src={`/nucleos/main/${link}/${brasaoSrc}`} height={95*brasaoAlt/brasaoLar} width={95}/>}
            credito = {credito}
            default={<Page1 titulo = {titulo} subtitulo = {subtitulo}/>} 
            title = {titulo}
            link = {link}
          />)}
          </div>
          
          
          <Footer/>
        </div>
    );
}

export default Nucleos;