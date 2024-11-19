import React from "react";
import styles from './erroPix.module.css'
import { Header } from "../../components/Header";

export const ErroPix: React.FC = () =>{
    return(
        <div className={styles.container}>
        <Header/>
        <main className={styles.erroPix}>
            <h1 className={styles.msgErro}>Falha no pagamento</h1>
            <p className={styles.descricaoErro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi vitae eleifend eu eleifend ac vel elit malesuada fames. Semper luctus volutpat tempor arcu.
            </p>
        </main>
        <img src="./Home-Indicator.png" alt="incador de página" className={styles.indicador}/>
    </div>
    )
}