import React from 'react'
import styles from './depositoRapido.module.css'
import { Header } from '../../components/Header'
import { FrameTopo } from '../../components/FrameTopo'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export const DepositoRapido: React.FC = () =>{
    const navigate = useNavigate()
    const navegarParaPaginaDeDepositoPix = () =>{
      navigate('/depositoPix')
    }
    
    return( 
      <div className={styles.container}>
        <Header/>
        <main className={styles.depositoRapido}>
        <FrameTopo texto='Deposito Rapido'/>
        <h1 className={styles.descricaoPagina}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>

        <div className={styles.valorInicial}>
          <h2>R$ 20,00</h2>
          <p>Max. R$ 999,99/mês</p>
          <div className={styles.opcoesDeValores}>
          <button>+ R$ 50,00</button>
          <button>+ R$ 100,00</button>
          <button>+ R$ 700,00</button>
        </div>
        </div>

        <footer className={styles.rodape}>
        <p className={styles.termo}><a href="">Morbi vitae eleifend</a> eu eleifend ac vel elit. </p>
        <Button texto='Pagar com pix' onClick={navegarParaPaginaDeDepositoPix}/>
        </footer>
       

        </main>
        <img src="/signup-payment/Home-Indicator.png" alt="incador de página" className={styles.indicador}/>
      </div>
    )
}