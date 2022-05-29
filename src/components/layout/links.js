import React from "react";
import { Link } from "react-router-dom";
import styles from './links.module.css'

export default function Links({to, text}){
    return(
    <Link to={to} className={styles.simples}>
        {text}
    </Link>
    )
}