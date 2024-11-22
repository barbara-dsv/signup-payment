import React from "react";
import styles from './erroPix.module.css'
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const ErroPix: React.FC = () => {
    const navigate = useNavigate()

    const handleErro = () => {
        navigate('/depositoPix')
    }

    return (
        <div className={styles.container}>
            <main className={styles.erroPix}>
                <div>
                    <h1 className={styles.msgErro}>Falha no pagamento</h1>
                    <p className={styles.descricaoErro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi vitae eleifend eu eleifend ac vel elit malesuada fames. Semper luctus volutpat tempor arcu.
                    </p>
                </div>
                <Button texto="Tentar novamente" onClick={handleErro} />
            </main>
            <img src="/signup-payment/Home-Indicator.png" alt="incador de página" className={styles.indicador} />
        </div>
    )
}