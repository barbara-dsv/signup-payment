import React, { useState } from 'react';
import styles from './depositoPix.module.css';
import { Header } from '../../components/Header';
import { FrameTopo } from '../../components/FrameTopo';

export const DepositoPix: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('qrCode');

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.depositoPix}>
        <FrameTopo texto="Depósito Pix" />
        <h1 className={styles.descricaoPagina}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <div className={styles.QrcodePix}>
          <div className={styles.opcao}>
            <button
              className={selectedOption === 'qrCode' ? styles.selected : ''}
              onClick={() => setSelectedOption('qrCode')}
            >
              QR Code
            </button>
            <button
              className={selectedOption === 'pixCopiaCola' ? styles.selected : ''}
              onClick={() => setSelectedOption('pixCopiaCola')}
            >
              Pix Copia e Cola
            </button>
          </div>
          <div
            className={
              selectedOption === 'qrCode' ? styles.qrCodeContent : styles.pixCopiaColaContent
            }
          >
            <img src="./Rectangle.png" alt="" />
          </div>
        </div>
        
        
      </main>
    </div>
  );
};
