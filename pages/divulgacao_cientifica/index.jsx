import react from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";
import { handleJSONfiles } from '../../utils/postHandler';

import Style from "./divulgacao_cientifica.module.css";

const divulgacao_list = require("./divulgacao_cientifica.json");

export function getStaticProps() {
  const divulgacao_cientifica = handleJSONfiles('./public/posts/divulgacao_cientifica');

  return {
    props: { divulgacao_cientifica },
  };
}


export default function Divulgacao_cientifica() {

  let { divulgacao_cientifica } = props;
  for (var i = 0; i < divulgacao_cientifica.length; i++) {
    if (divulgacao_cientifica[i]["0"] != undefined) divulgacao_cientifica[i] = divulgacao_cientifica[i]["0"];
    else divulgacao_cientifica[i] = divulgacao_cientifica[i];
  }

  return (
    <div className={Style.background}>
      <Header />
      <div className={Style.title_bar}>
        <span className={Style.text_title}>Divulgação Científica</span>
      </div>

      <ul className={Style.ul}>
        {divulgacao_list.map(
          (
            {
              titulo,
              dia,
              mes,
              ano,
              noticia,
              img_src,
              alt,
              lar,
              link,
              links,
              images,
              youtube,
            },
            index
          ) => (
            <Link
              href={{
                pathname: link,
                query: {
                  titulo,
                  dia,
                  mes,
                  ano,
                  noticia,
                  img_src,
                  links,
                  images,
                  youtube,
                },
              }}
              key={index}
            >
              <a className={Style.a}>
                <li className={Style.li}>
                  <div
                    className={Style.image_notice}
                    style={{
                      backgroundImage: `url('/divulgacao_cientifica/${img_src}')`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  {`${dia}/${mes}/${ano}` !== "//" ? (
                    <div
                      className={Style.data_notice}
                    >{`${dia}/${mes}/${ano}`}</div>
                  ) : (
                    <div className={Style.data_notice}>--/--/----</div>
                  )}
                </li>
              </a>
            </Link>
          )
        )}
      </ul>
      <Footer />
    </div>
  );
}
