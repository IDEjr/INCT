import React from "react";

import Style from "./galeria.module.css";

import Header from './../components/header';
import Footer from './../components/footer';

import Item from './item_galeria';

const list_Image = require("./brasoes.json");

export default function galeria(){

    return(
        <div className={Style.background}>
            <Header/>
            <div className={Style.box_galeria}>
                <span className={Style.title}>Galeria</span>
                <ul className={Style.lista}>                
                    { list_Image.map( ({key, link, logo, brasaoLar, brasaoAlt}) => 
                    <li key={key} className={Style.item_Lista}>
                        <Item title={key} logo={logo} link={link}
                              w={brasaoLar} h={brasaoAlt}/>
                    </li>) }                
                </ul>            

            </div>
            <Footer/>
        </div>     
    )
}