import React from "react";
import { PiArrowRightBold } from "react-icons/pi";
import styles from './button.module.css'

interface ButtonProps{
    texto: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({texto, onClick}) =>{
   
    
    return(
        <button className={styles.btn_comecar} onClick={onClick}>
            <p className={styles.comecar}>{texto}</p>
            <PiArrowRightBold size={18} className={styles.setaDireita}/>
        </button>
    )
}