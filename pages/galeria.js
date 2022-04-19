import style from "../styles/galeria.module.css"
import react from "react"

import Header from './components/header';
import Footer from './components/footer';

export default function galeria(){

    return(
        
        <div className={style.background}>
        <Header/>        
        <h1 div id={style.fotos}>Fotos</h1>
        <div id={style.allButtons}>
            <tr>
                <td>
                    <a className = {style.botao} type="button" href = "https://www.youtube.com"><img src="https://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/ufsc.png" height ="80" width="100"/>UFSC</a>
                </td>
                <td>
                    <a className = {style.botao} type="button" href = "#"><img src="https://ufal.br/ufal/comunicacao/identidade-visual/brasao/somente-imagem/brasao-ufal.png/@@images/image/thumb" height ="80" width="100"/>UFAL</a>
                </td>
                <td>
                    <a className = {style.botao} type="button" href = "#"><img src="https://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/unicamp.png" height ="80" width="100"/>UNICAMP</a>
                </td>                
                <td> 
                    <a className = {style.botao} type="button" href = "#"><img src="https://logodownload.org/wp-content/uploads/2015/02/ufrgs-logo-0.png" height ="80" width="100"/>UFRGS</a>
                </td>            
                </tr>
            <tr>
                <td>
                <a className = {style.botao} type="button" href = "#"><img src="https://www.ime.usp.br/caem/Imagens/logotipos/logo_usp.png" height ="80" width="100"/>USP</a>
                </td>
                <td>
                <a className = {style.botao} type="button" href = "#"><img src="http://vestibular.uemg.br/ead/templates/shaper_strings/images/presets/preset1/logo@2x.png" height ="80" width="100"/>UEMG</a>
                </td>
                <td>
                <a className = {style.botao} type="button" href = "#"><img src="https://ccs2.ufpel.edu.br/wp/wp-content/uploads/2014/04/Escudo-Colorido-UFPEL_10042014-150x150.png" height ="80" width="100"/>UFPEL</a>
                </td>
                <td>
                <a className = {style.botao} type="button" href = "#"><img src="https://www.ufsm.br/app/uploads/sites/544/2020/04/UFSM.png" height ="80" width="100"/>UFSM</a>
                </td>
            </tr>
            <tr>
                <td>
                <a className = {style.botao} type="button" href = "#"><img src="https://i.pinimg.com/originals/5b/2e/84/5b2e84ef988de088b22ce12867c6c3a1.png" height ="80" width="100"/>UNB</a>
                </td>
                <td>
                <a className = {style.botao} type="button" href = "#"><img src="http://www.saocarlos.usp.br/wp-content/uploads/2018/10/usp-logo-220x165_mobile.png" height ="80" width="100"/>USP-SCar</a>
                </td>
                <td>
                <a className = {style.botao} type="button" href = "#"><img src="https://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/uenf.png" height ="80" width="100"/>UENF</a>
                </td>
                <td>
                <a className = {style.botao} type="button" href = "#"><img src="https://www.furb.br/web/img/logo-furb-color.png" height ="80" width="100"/>FURB</a>
                </td>
            </tr>            
        </div>
        <Footer/>
        </div>
    )
}