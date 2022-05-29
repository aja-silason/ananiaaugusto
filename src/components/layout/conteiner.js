import React from "react";
import styles from './conteiner.module.css'

export default function Conteiner(props){
    return(
        <div className={`${styles.conteiner} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}