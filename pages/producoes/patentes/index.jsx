import react, { useState } from 'react';

import style from './patentes.module.css';

import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Patentes(){

    return (

        <div className={style.background}>

            <Header/>

            <Footer/>
            
        </div>
    );
}
