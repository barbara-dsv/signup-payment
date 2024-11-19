import React from "react";
import styles from './sucessoPix.module.css'
import { Header } from "../../components/Header";

export const SucessoPix: React.FC = () =>{
    return(
        <div className={styles.container}>
            <Header/>
            <main className={styles.sucessoPix}>
                <h1 className={styles.msgSucesso}>Sucesso!</h1>
                <p className={styles.descricaoSucesso}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi vitae eleifend eu eleifend ac vel elit malesuada fames. Semper luctus volutpat tempor arcu.
                </p>
            </main>
            <img src="./Home-Indicator.png" alt="incador de página" className={styles.indicador}/>
        </div>
    )
}