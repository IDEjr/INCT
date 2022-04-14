import style from './nucleos.module.css';

import Header from '../components/header';
import Item from './item_nucleo';
import Page from './page_item_nucleo';
import Footer from '../components/footer';

// NOTA: a fonte do texto está declarada no lugar certo?
function Nucleos() {
    return (
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>

          <Header/>
          
          <div className={style.title_bar}>
            <h1 className={style.title}>Núcleos</h1>
          </div>
          <Item 
            default={<Page titulo = 'UFSC' subtitulo = 'Universidade Federal de Santa Catarina'/>} 
            hovered={<Page descricao = '(descrição)'/>}
          />
          
          <Footer/>
        </div>
    );
}

export default Nucleos;