import React from "react";
import { PiArrowRightBold } from "react-icons/pi";
import styles from './buttoncomecar.module.css'

export const ButtonComecar: React.FC = () =>{
    
    return(
        <button className={styles.btn_comecar}>
            <p className={styles.comecar}>Começar</p>
            <PiArrowRightBold size={18} className={styles.setaDireita}/>
        </button>
    )
}