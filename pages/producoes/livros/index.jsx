import react, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import style from './livros.module.css';

import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Livros(){
    const livros = [{nome: 'A energia química em movimento', link: '/producoes/livros/A-energia-quimica-em-movimento-vol-15-quimica-cotidiano.pdf', src: '/producoes/livros/A-energia-quimica-em-movimento-vol-15-quimica-cotidiano_cover.png'},
                    {nome: 'Conhecimentos químicos que você precisa para sobreviver ao apocalipse zumbi', link: '/producoes/livros/conehcimentos-quimicos-vol-19.pdf', src: '/producoes/livros/conehcimentos-quimicos-vol-19_cover.png'},
                    {nome: 'A fábrica de medicamentos da natureza: alguns fármacos de origem vegetal, animal, microbiana e marinha', link: '/producoes/livros/farmacos-vol-17-quimica-cotidiano.pdf', src: '/producoes/livros/farmacos-vol-17-quimica-cotidiano_cover.png'},
                    {nome: 'Química para o desenvolvimento sustentável na gestão de resíduos industriais e agroindustriais', link: '/producoes/livros/quimica-industriais-vol-18-quimica-cotidiano.pdf', src: '/producoes/livros/quimica-industriais-vol-18-quimica-cotidiano_cover.png'},
                    {nome: 'Química e Energia: transformando moléculas em desenvolvimento', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol2-energia.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol2-energia_cover.png'},
                    {nome: 'A Química e o Controle de Dopagem no Esporte', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol3-esporte.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol3-esporte_cover.png'},
                    {nome: 'A Química dos Alimentos: produtos fermentados e corantes', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol4-alimentos.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol4-alimentos_cover.png'},
                    {nome: 'A Química no Cuidado da Pele', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol5-Cosmeticos.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol5-Cosmeticos_cover.png'},
                    {nome: 'Química na Saúde', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol6-Saude.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol6-Saude_cover.png'},
                    {nome: 'A Química na Natureza', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol7-Natureza.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-Vol7-Natureza_cover.png'},
                    {nome: 'Radioatividade e Meio Ambiente: os Átomos Instáveis da Natureza', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol8-Radioatividade-capa.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol8-Radioatividade-capa_cover.png'},
                    {nome: 'Sódio', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol10-sodio.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol10-sodio_cover.png'},
                    {nome: 'Carbono', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol11-carbono-capa.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol11-carbono-capa_cover.png'},
                    {nome: 'Oxigênio', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol12-oxigenio-capa.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol12-oxigenio-capa_cover.png'},
                    {nome: 'Enxofre: do elemento às moléculas sulfuradas bioativas', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol13-enxofre-capa.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol13-enxofre-capa_cover.png'},
                    {nome: 'Nióbio: o elemento do século XXI', link: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol14-niobio-capa.pdf', src: '/producoes/livros/SBQ-Colecao-Quimica-no-Cotidiano-vol14-niobio-capa_cover.png'},
                    {nome: 'Sustentabilidade em jogo', link: '/producoes/livros/Sustentabilidade-em-jogo-vol-16-colecao-quimica-cotidiano.pdf', src: '/producoes/livros/Sustentabilidade-em-jogo-vol-16-colecao-quimica-cotidiano_cover.png'}];
    return (

        <div className={style.background}>
            <Header/>
            <div className={style.boxLivros}>
                <span className={style.title}>Livros</span>
                {livros.map((i, index) => {
                    return (                    
                        <Link href={i.link} key={index}>
                            <a className={style.boxItem}>
                                <Image src={i.src} width={'150px'} height={'200px'} />
                                <div className={style.boxDescricao}>
                                    <span>{i.nome}</span>
                                </div>                               
                            </a>
                        </Link>)
                })}
            </div>

            <Footer/>            
        </div>
    );
}
