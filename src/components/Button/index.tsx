import React from "react";
import { PiArrowRightBold } from "react-icons/pi";
import styles from './button.module.css'
import { useNavigate } from "react-router-dom";

interface ButtonProps{
    texto: string;
}

export const Button: React.FC<ButtonProps> = ({texto}) =>{
    const navigate = useNavigate()
    function navegarParaOutraPagina() {
    
        navigate('/cadastro')
    }
    
    return(
        <button className={styles.btn_comecar} onClick={navegarParaOutraPagina}>
            <p className={styles.comecar}>{texto}</p>
            <PiArrowRightBold size={18} className={styles.setaDireita}/>
        </button>
    )
}