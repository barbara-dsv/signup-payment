import { ButtonComecar } from '../../components/ButtonComecar'
import { FrameTopo } from '../../components/FrameTopo'
import { Header } from '../../components/Header'
import styles from './cadastro.module.css'
export const Cadastro: React.FC = () => {

    return(
        <div className={styles.container}>
            <Header/>

            
            <FrameTopo texto="Cadastro"/>
            <h1 className={styles.descricaoPagina}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>

            <form>
                <label htmlFor="nome">Name</label>
                <input type="text" placeholder='Ex:Jon Doe'/>

                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder='Ex: jondoe@gmail.com'/>

                <label htmlFor="number">WhatsApp Number</label>
                <input type="number" placeholder='+55 (85) 99793-5645'/>

                <label htmlFor="">
                    <input type="checkbox"  className={styles.marcarOpcao}/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="">Morbi vitae eleifend</a> eu eleifend ac vel elit. 
                </label>

                <ButtonComecar texto='Criar cadastro'/>
            </form>
        </div>
    )
}