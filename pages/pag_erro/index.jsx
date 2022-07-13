import react from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Box from '../components/main_box'
import Error from '../components/error_msg'


export default function Erro(){ 

    return (
        <>
            <Header/>
            <Title title='Erro' color='red'/>
            <Box invert>
                <Error msg="Desculpe o incômodo, mas esse artigo está com o link desatualizado"/>                
            </Box>
            <Footer/>            
        </>
    );
}
