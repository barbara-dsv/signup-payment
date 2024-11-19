import React from "react";
import styles from './btnAguardandoPagamento.module.css'

interface BtnProps{
    onClick: () => void;
}

export const BtnAguardandoPagamento: React.FC<BtnProps> = ({onClick}) =>{
    return(
       <button className={styles.btnAguardandoPagamento} onClick={onClick}>
            Aguardando pagamento 
       </button>
    )

}