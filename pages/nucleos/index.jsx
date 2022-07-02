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
<<<<<<< HEAD
=======
          <link rel="preconnect" href="https://fonts.googleapis.com"/>  
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>

>>>>>>> 459fd0672d08661a55ad6f171b1e080e1809e706
          <Header/>
                    
          <span className={style.title}>Núcleos</span>          

<<<<<<< HEAD
          <div className={style.todosNucleos}>
          {lista_nucleos.map( ({fundo, brasaoSrc, brasaoLar, brasaoAlt, titulo, subtitulo,
                                p1, p2, link1, nome1, desc1, link2, nome2, desc2, credito, link}, index) => 
=======
          {lista_nucleos.map( ([{fundo, brasaoSrc, brasaoLar, brasaoAlt, titulo, subtitulo, credito, link}, len], index) => 
>>>>>>> 459fd0672d08661a55ad6f171b1e080e1809e706
          <Item key = {index}
            fundo = {`/nucleos/main/${link}/${fundo}`}
            brasao = {<Image src={`/nucleos/main/${link}/${brasaoSrc}`} height={95*brasaoAlt/brasaoLar} width={95}/>}
            credito = {credito}
            default={<Page1 titulo = {titulo} subtitulo = {subtitulo}/>} 
            title = {titulo}
            link = {link}
<<<<<<< HEAD
          />)}
          </div>
=======
          />
          )}
>>>>>>> 459fd0672d08661a55ad6f171b1e080e1809e706
          
          
          <Footer/>
        </div>
    );
}

export default Nucleos;