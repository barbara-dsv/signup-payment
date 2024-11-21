import React, { useState } from 'react';
import styles from './depositoPix.module.css';
import { Header } from '../../components/Header';
import { FrameTopo } from '../../components/FrameTopo';
import { BtnAguardandoPagamento } from '../../components/BtnAguardandoPagamento';
import { useNavigate } from 'react-router-dom';

export const DepositoPix: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('qrCode');
  const navigate = useNavigate()

  const navegarParaPaginaDeResposta = () => {
    const isSuccess = Math.random() > 0.5; 
    if (isSuccess) {
      navigate('/sucessoPix'); 
    } else {
      navigate('/erroPix'); 
    }
  };

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

          <div className={
              selectedOption === 'qrCode' ? styles.qrCodeContent : styles.pixCopiaColaContent
            }>
          <img src="/signup-payment/Rectangle.png" alt="" className={styles.slide}/>
          </div>
          {selectedOption === 'qrCode' ? (
              <div className={styles.containerQrCode}>
                <img src="/signup-payment/qrcode.png" alt="QR Code" />
              </div>  
            ) : (
              <div className={styles.containerChavePix}>
                <div className={styles.chavePix}>
                066960.0495050.0.64654.45450
                </div>
                <button className={styles.copiarPix}>
                  Copiar código do pix
                </button>
                <p className={styles.descricaoPix}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae 
                eleifend eu eleifend ac vel elit malesuada fames. Semper luctus volutpat tempor arcu.
                </p>
              </div>
            )}
         
          <BtnAguardandoPagamento onClick={navegarParaPaginaDeResposta}/>
        </div>
      </main>
      <img src="/signup-payment/Home-Indicator.png" alt="incador de página" className={styles.indicador}/>
    </div>
  );
};
