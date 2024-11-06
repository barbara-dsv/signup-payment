import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import styles from './home.module.css'

export const Home: React.FC = () =>{

    return(
        <div className={styles.div}>
        <Header/> 

        <div className={styles.descricao}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae eleifend eu eleifend ac vel elit malesuada fames. Semper luctus volutpat tempor arcu.</p>
        <Button texto='Começar'/>
        </div>
        <img src="./Home-Indicator.png" alt="incador de página" className={styles.indicador}/>
        </div>
    )
} 