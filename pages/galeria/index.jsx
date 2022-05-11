import React from "react";

import Style from "./galeria.module.css";

import Header from './../components/header';
import Footer from './../components/footer';

import Item from './item_galeria';

export default function galeria(){

    const list_Image = 
    [        
        { key: "UFSC", link: "/galeria/ufsc", logo: "/nucleos/ufsc_logo.png"    },
        { key: "UFSCar", link: "/galeria/ufscar", logo: "/nucleos/ufscar_logo.png" },
        { key: "FURB", link: "/galeria/furb", logo: "/nucleos/furb_logo.png" },
        { key: "PUCRS", link: "/galeria/pucrs", logo: "/nucleos/pucrs_logo.png" },
        { key: "UFAL", link: "/galeria/ufal", logo: "/nucleos/ufal_logo.png" },
        { key: "UFMG", link: "/galeria/ufmg", logo: "/nucleos/ufmg_logo.png" },
        { key:  "UFRGS", link: "/galeria/ufrgs",logo: "/nucleos/ufrgs_logo.png"},
        { key: "UFSJ", link: "/galeria/ufsj", logo: "/nucleos/ufsj_logo.png" },
        { key: "UNB", link: "/galeria/unb", logo: "/nucleos/unb_logo.png"},
        { key: "UNICAMP", link: "/galeria/unicamp", logo: "/nucleos/unicamp_logo.png" },
        { key: "USP-SCar", link: "/galeria/usp-scar", logo: "/nucleos/uspscar_logo.png"},
        { key: "USP", link: "/galeria/usp", logo: "/nucleos/usp_logo.png"}
    ];

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