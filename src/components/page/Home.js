import React from "react";
import { Link } from "react-router-dom";
import Conteiner from "../layout/conteiner";
import Links from "../layout/links";
import LinkButton from "../layout/links";
import styles from './Home.module.css'

import icongithub from '../assets/iconsgithub.png'
import iconfacebook from '../assets/iconsfacebook.png'
import iconinstagram from "../assets/iconsinstagram.png"

import geral from "../assets/geral.png"

import pdf from './assets/anania_augusto_cv.pdf'

export default function Home(){
    return(
        <Conteiner className="conteiner">
            <div className={styles.header}>
                <Links to='/' text="Entrar em Contacto" className="simples"/>

            </div>
            <div className={styles.conteudo}>
                <div className={styles.dir}>
                asd
                </div>
                <div className={styles.esq}>
                    <h1>Anania Jaime Augusto</h1>
                    <p>bfkhwf fbkbgfyufgnuerk gerghkgkug ng jrkgberg er ghuerbgukerg rgreg uerhgu krengnçfluehf ewfwuiiuwb bfkhwf fbkbgfyufgnuerk gerghkgkug ng jrkgberg er ghuerbgukerg rgreg uerhgu krengnçfluehf ewfwuiiuwb bfkhwf fbkbgfyufgnuerk gerghkgkug ng jrkgberg er ghuerbgukerg rgreg uerhgu krengnçfluehf ewfwuiiuwb</p>

                    <a href="./anania_augusto_cv.pdf" target="_black" className={styles.a}>Ver C.V</a>

                </div>
            </div>
            
            <div className={styles.footer}>
                
                <a href="https://github.com/aja-silason" target="_black" className={styles.a}><img src={icongithub}/>github</a>

                <a href="https://www.facebook.com/profile.php?id=100076321422246" target="_black" className={styles.a}><img src={iconfacebook} />facebook</a>

                <a href="https://www.instagram.com/ananias_augusto/" target="_black" className={styles.a}><img src={iconinstagram}/>instagram</a>

            </div>
        </Conteiner>
    )
}