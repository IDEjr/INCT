import styles from './../../styles/paginated_items.module.css'

import Artigo from './item_artigos'
import Livro from './item_livros'
import Patente from './item_patentes'

import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function PaginatedItems(props) {
  const itemsPerPage = props.itemsPerPage;
  const items = props.items;
  const type = props.type;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(items);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Caso "items" mude, as variáveis são resetadas
  useEffect(() => {
    //console.log("Entrei na atualização da busca")
    setItemOffset(0);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [items])

  useEffect(() => {
    //console.log("Entrei na função principal de paginação")
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  useEffect(() => {
    //console.log("Entrei no cleanup")
    return () => {
        setItemOffset(0);
        setCurrentItems(null);
        setPageCount(0);
    }
  }, [])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {type == 'artigos' && 
        currentItems.map( ({nome, autores, publicador, versao, paginas, ano, link}, index) => 
        <Artigo key={index} nome = {nome} autores = {autores} publicador = {publicador} versao = {versao} 
                paginas = {paginas} ano = {ano} link = {link} width="80vw"/>)}

      {type == 'livros' && 
        currentItems.map(({nome, link, src}, index)=>
        <Livro key={index} nome={nome} link={link} src={src} width="80vw"/>)}

      {type == 'patentes' && 
        currentItems.map(({nome, link}, index) =>
        <Patente key={index} nome={nome} link={link} width="80vw"/>)}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={styles.container}
        pageLinkClassName={styles.item}
        previousLinkClassName={styles.previous}
        nextLinkClassName={styles.next}
        activeLinkClassName={styles.active}
      />
    </>
  );

}