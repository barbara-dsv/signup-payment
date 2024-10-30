import React from "react";
import styles from './frameTopo.module.css'


interface FrameTopoProps{
    texto: string
}

export const FrameTopo: React.FC<FrameTopoProps> = ({texto}) =>{


    return(
        <div className={styles.caixa}>
            <p className={styles.textoAlternativo}>{texto}</p>
        </div>
    )
}