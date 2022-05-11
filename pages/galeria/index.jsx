import React from "react";

import Style from "./galeria.module.css";

import Header from './../components/header';
import Footer from './../components/footer';

import Item from './item_galeria';

const list_Image = require("./brasoes.json");

export default function galeria(){

    return(
        <div>
            <Header/>
            <div className={Style.box_galeria}>
                <span className={Style.title}>Galeria</span>
                <ul className={Style.lista}>                
                    { list_Image.map( ({key, link, logo}, index) => 
                    <li key={index} className={Style.item_Lista}>
                        <Item title={key} logo={logo} link={link}/>
                    </li>) }                
                </ul>            

            </div>
            <Footer/>
        </div>     
    )
}