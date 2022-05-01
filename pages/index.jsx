import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Carousel from 'react-elastic-carousel';
import Item from './artigos/item_artigo.jsx';

export default function Home() {
  const noticias_list = require("./noticias/noticias.json");
  const articles_list = require("./artigos/artigos.json");
  const items = [
    {id: 1, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'},
    {id: 2, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'},
    {id: 3, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'},
    {id: 4, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'},
    {id: 5, src: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-quimica-oferece-conhecimentos-muito-importantes-para-desenvolvimento-nossa-sociedade-562fd9fc8296e.jpg'}
  ]

  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.bg2}>
      <Carousel>
        {items.map(item => <img className={styles.image} src={item.src} />)}
      </Carousel>
      </div>
      <div className={styles.title_bar}>
        <h2 className={styles.text_title}>Últimas notícias</h2>
      </div>
      <ul className={styles.ul}>
        {noticias_list.map(
          ({ key, titulo, dia, mes, ano, noticia, img_src, link }, index) =>
            index < 3 && (
              <a className={styles.a} href={link}>
                <li key={key}>
                  <Image
                    className={styles.image}
                    src={img_src}
                    width={250}
                    height={150}
                  />
                  <br />
                  <span className={styles.title_notice}>{titulo}</span>
                  <br />
                  <span className={styles.data_notice}>
                    {dia}/{mes}/{ano}
                  </span>
                </li>
              </a>
            )
        )}
      </ul>
      <div className={styles.title_bar2}>
        <h2 className={styles.text_title}>Últimos artigos</h2>
      </div>
      <ul className={styles.ul2}>
        {articles_list.map(
          ({ key, nome, autores, publicador, versao, paginas, ano, link }, index) =>
            index < 3 && (
              <li key={key}><Item nome = {nome} autores = {autores} publicador = {publicador} versao = {versao} paginas = {paginas} ano = {ano} link = {link}/></li>
            )
        )}
      </ul>
      <Footer />
    </div>
  );
}
