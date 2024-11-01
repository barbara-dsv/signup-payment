import { FormEvent, useState } from 'react'
import { ButtonComecar } from '../../components/ButtonComecar'
import { FrameTopo } from '../../components/FrameTopo'
import { Header } from '../../components/Header'
import styles from './cadastro.module.css'
import { useNavigate } from 'react-router-dom'



export const Cadastro: React.FC = () => {
    const navigate = useNavigate()

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [termoAceito, setTermoAceito] = useState(false);

    const handleCadastro = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        if(!nome || !email || !numero){
            alert('Por favor, preencha todos os campos para se cadastrar')
            return
        }

        if (!termoAceito) {
            alert("Você precisa aceitar os termos para se cadastrar.");
            return;
        }

        const novoUsuario = { nome, email, numero };
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
        usuarios.push(novoUsuario)

        localStorage.setItem('usuarios', JSON.stringify(usuarios    ))
        alert('cadastrado')

        navigate('depositoRapido')
    }

    return(
        <div className={styles.container}>
            <Header/>           
            <main className={styles.cadastro}>
            <FrameTopo texto="Cadastro"/>
            <h1 className={styles.descricaoPagina}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>

            <form onSubmit={handleCadastro}>
            <label htmlFor="nome">Name</label>
            <input type="text" placeholder='Ex:Jon Doe' value={nome} onChange={(e) => setNome(e.target.value)}/>

             <label htmlFor="email">E-mail</label>
            <input type="text" placeholder='Ex: jondoe@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="number">WhatsApp Number</label>
            <input type="number" placeholder='+55 (85) 99793-5645' value={numero}  onChange={(e) => setNumero(e.target.value)} />

            <div className={styles.marcarOpcao}>
            <input type="radio" className={styles.confirmacao}  checked={termoAceito} onChange={() => setTermoAceito(!termoAceito)}/>
            <p className={styles.termo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="">Morbi vitae eleifend</a> eu eleifend ac vel elit. </p>
            </div>

            <ButtonComecar texto='Criar cadastro'/>
            </form>
            </main>
            <img src="./Home-Indicator.png" alt="incador de página" className={styles.indicador}/>
        </div>
    )
}