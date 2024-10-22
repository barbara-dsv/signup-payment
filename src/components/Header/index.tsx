import React from "react";
import styles from './header.module.css'
import { PiBatteryFullFill,PiCellSignalFullBold, PiWifiHighBold  } from "react-icons/pi";

export const Header: React.FC = () =>{

    const agora = new Date();
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    return(
        <header className={styles.header}>
            <p className={styles.horario}>{`${agora.getHours()}:${minutos}`}</p>
           
            <img src="./Notch.png" alt="" />

            <div className={styles.icones}>
            <PiCellSignalFullBold size={24}/>
            <PiWifiHighBold size={24}/>
            <PiBatteryFullFill size={24}/>
            </div>
          
        </header>
    )
}