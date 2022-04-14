import React from 'react';
import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';

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
                                    <Image src={Oil} width='180px' height='180px' className={style.image}/> 
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
                                    <Image src={Oil} width='180px' height='180px' className={style.image}/>
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
                                    <Image src={Oil} width='180px' height='180px' className={style.image}/>
                                </div>
                                <div className={style.text_box}>
                                    <p className={style.text}><b>Catalisadores Suportados em Materiais Magnéticos:</b> A vantagem do uso de nanopartículas magnéticas 
                                    modificadas reside, além de sua elevada área superficial, no fato de as mesmas poderem se dispersar facilmente no meio reacional 
                                    e, ao final, poderem ser rapidamente recuperadas por sedimentação por meio de um magneto. Vem-se desenvolvendo catalisadores 
                                    magnéticos e ampliando sua aplicação.</p>
                                </div>
                            </div>
                        </li>
                        <li className={style.list_element}>
                            <div className={style.area}>
                                <div className={style.image_box}>              
                                    <Image src={Oil} width='180px' height='180px' className={style.image}/>
                                </div>
                                <div className={style.text_box}>
                                    <p className={style.text}><b>Catálise Voltada à Química Fina:</b> Desenvolvimento de novos catalisadores visando a transformação 
                                    de óleos essenciais e seus componentes: compostos terpênicos e alil aromáticos. As principais transformações 
                                    desejadas estão relacionadas à reações de oxidação seletiva/autoxidação por dioxigênio e hidroformilação de olefinas. 
                                    Dessa forma, é possível a obtenção de produtos de alto valor agregado, em particular flavorizantes e aromas, e de interesse 
                                    comercial utilizando-se matéria-prima de origem natural renovável e disponível no Brasil.</p>
                                </div>
                            </div>
                        </li>
                        <li className={style.list_element}>
                            <div className={style.area}>
                                <div className={style.image_box}>              
                                    <Image src={Oil} width='180px' height='180px' className={style.image}/>
                                </div>
                                <div className={style.text_box}>
                                    <p className={style.text}><b>Desenvolvimento de enzimas artificiais:</b> Desenvolvimento de catalisadores com efeitos sinérgicos 
                                    em reações de hidrólise de ésteres fosfatos e carboxílicos, e de amidas. A motivação central desse estudo vai além da compreensão 
                                    do mecanismo pelo qual essas reações catalíticas ocorrem. Acredita-se que o avanço científico, nesta área, criará uma 
                                    possibilidade real de desenvolvimento de drogas específicas para a hidrólise de fosfatos nos ácidos nucléicos DNA, RNA, bem como 
                                    de ésteres e peptídeos/amidas em proteínas de diferentes tipos.</p>
                                </div>
                            </div>
                        </li>
                        <li className={style.list_element}>
                            <div className={style.area}>
                                <div className={style.image_box}>              
                                    <Image src={Oil} width='180px' height='180px' className={style.image}/>
                                </div>
                                <div className={style.text_box}>
                                    <p className={style.text}><b>Líquidos Iônicos:</b> Desenvolvimento simples e eficiente, em um líquido iônico, de metodologias de 
                                    preparação e de estabilização de sistemas moleculares e nanopartículas de metais de transição para catálise. Um exemplo 
                                    esclarecedor é a preparação de catalisadores heterogêneos nanoestruturados com propriedades magnéticas.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className={style.title}>RESULTADOS PRELIMINARES</h1>
                    <div className={style.options}>
                        <a href='#' className={style.button} download>Arquivo em Português</a>
                        <a className={style.button} href='#'>Arquivo em Inglês</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;