import React from 'react';
import Image from 'next/image'
import Header from './components/header';

import style from '../styles/sobre.module.css';
import Oil from '../public/about/oil.png';

function Sobre() {
    return (
        <div className={style.background}>
            <Header/>
            <div className={style.about}>
                <div className={style.mission}>
                    <h1 className={style.title}>MISSÃO</h1>
                    <p className={style.text}>O INCT de Catálise em Sistemas Moleculares e Nanoestruturados (INCT-CMN) 
                    tem por finalidade a consolidação e promoção do desenvolvimento da área de 
                    catálise para as diversas atividades industriais e de pesquisa no país.</p>
                </div>
                <div>
                    <h1 className={style.title}>ÁREAS DE ATUAÇÃO</h1>
                    <ul className={style.area_list}>
                        <li className={style.list_element}>
                            <div className={style.area}>
                                <div className={style.image_box}>              
                                    <Image src={Oil} className={style.image}/>
                                </div>
                                <div className={style.text_box}>
                                    <p className={style.text}><b>Oleoquímica e Biodiesel:</b> Desenvolvimento de sistemas catalíticos 
                                    homogêneos de baixo custo para a produção de materiais poliméricos (uretanas e poliésteres) a partir 
                                    de óleo de soja e de mamona. A estratégia vislumbrada pelo Instituto refere-se ao aprimoramento das propriedades 
                                    do biodiesel de soja através do desenvolvimento de diferentes sistemas catalíticos.</p>
                                </div>
                            </div>
                        </li>
                        <li className={style.list_element}>
                            <div className={style.area}>
                                <div className={style.image_box}>              
                                    <Image src={Oil} className={style.image}/>
                                </div>
                                <div className={style.text_box}>
                                    <p className={style.text}><b>Polimerização de Olefinas:</b> Desenvolvimento de sistemas catalíticos quirais 
                                    para a produção de materiais poliméricos especiais, e assim desenvolver catalisadores que possam 
                                    controlar massa molecular e topologia dos polímeros, procurando aprimorar as técnicas de polimerização de olefinas.</p>
                                </div>
                            </div>
                        </li>
                        <li className={style.list_element}>
                            <div className={style.area}>
                                <div className={style.image_box}>              
                                    <Image src={Oil} className={style.image}/>
                                </div>
                                <div className={style.text_box}>
                                    <p className={style.text}><b>Catalisadores Suportados em Materiais Magnéticos:</b> A vantagem do uso de nanopartículas magnéticas modificadas reside, 
                                    além de sua elevada área superficial, no fato de as mesmas poderem se dispersar facilmente no meio reacional e, ao final, 
                                    poderem ser rapidamente recuperadas por sedimentação por meio de um magneto. 
                                    Vem-se desenvolvendo catalisadores magnéticos e ampliando sua aplicação.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className={style.title}>RESULTADOS PRELIMINARES</h1>
                    <div className={style.options}>
                        <a className={style.button} href="#" target="_blank">Arquivo em Português</a>
                        <a className={style.button} href="#" target="_blank">Arquivo em Inglês</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;