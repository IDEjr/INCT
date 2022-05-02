import React from "react"

import Style from "./galeria.module.css"

import Header from './../components/header';
import Footer from './../components/footer';

import Item from './item_galeria';

export default function galeria(){

    const list_Image = 
    [        
        { key: "UFSC", link: "/galeria/usp", logo: "/nucleos/ufsc_logo.png"    },
        { key: "UFSCar", link: "/galeria/usp", logo: "/nucleos/ufscar_logo.png" },
        { key: "FURB", link: "/galeria/usp", logo: "/nucleos/furb_logo.png" },
        { key: "PUCRS", link: "/galeria/usp", logo: "/nucleos/pucrs_logo.png" },
        { key: "UFAL", link: "/galeria/usp", logo: "/nucleos/ufal_logo.png" },
        { key: "UFMG", link: "/galeria/usp", logo: "/nucleos/ufmg_logo.png" },
        { key:  "UFRGS", link: "/galeria/usp",logo: "/nucleos/ufrgs_logo.png"},
        { key: "UFSJ", link: "/galeria/usp", logo: "/nucleos/ufsj_logo.png" },
        { key: "UNB", link: "/galeria/usp", logo: "/nucleos/unb_logo.png"},
        { key: "UNICAMP", link: "/galeria/usp", logo: "/nucleos/unicamp_logo.png" },
        { key: "USP-SCar", link: "/galeria/usp", logo: "/nucleos/uspscar_logo.png"},
        { key: "USP", link: "/galeria/usp", logo: "/nucleos/usp_logo.png"}
    ];

    return(
        <div className={Style.background}>
            <Header/>
            <div className={Style.box_galeria}>
                <span className={Style.title}>Galeria</span>
                <ul className={Style.lista}>                
                    { list_Image.map( ({key, link, logo}) => 
                    <li key={key} className={Style.item_Lista}>
                        <Item title={key} logo={logo} link={link}/>
                    </li>) }                
                </ul>            

            </div>
            <Footer/>
        </div>     
    )
}