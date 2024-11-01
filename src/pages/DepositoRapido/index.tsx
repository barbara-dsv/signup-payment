import React from 'react'
import styles from './depositoRapido.module.css'
import { Header } from '../../components/Header'
import { FrameTopo } from '../../components/FrameTopo'
export const DepositoRapido: React.FC = () =>{
    
    return(
      <div className={styles.container}>
        <Header/>
        <main className={styles.depositoRapido}>
        <FrameTopo texto='Deposito Rapido'/>
        <h1 className={styles.descricaoPagina}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        </main>

      </div>
    )
}