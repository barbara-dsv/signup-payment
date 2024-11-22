import { FormEvent, useState, useEffect } from 'react';
import { Button } from '../../components/Button';
import { FrameTopo } from '../../components/FrameTopo';
import styles from './cadastro.module.css';
import { useNavigate } from 'react-router-dom';

interface Usuario {
    nome: string;
    email: string;
    numero: string;
    dataCadastro: number; 
}

export const Cadastro: React.FC = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [termoAceito, setTermoAceito] = useState(false);

    const TEMPO_EXPIRACAO = 10 * 60 * 1000; 

    const getUsuarios = () => {
        const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuariosValidos = usuarios.filter((usuario) => {
            return Date.now() - usuario.dataCadastro < TEMPO_EXPIRACAO;
        });

        localStorage.setItem('usuarios', JSON.stringify(usuariosValidos));
        return usuariosValidos;
    };


    useEffect(() => {
        getUsuarios();
    }, []);

    const handleCadastro = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!nome || !email || !numero) {
            alert('Por favor, preencha todos os campos para se cadastrar');
            return;
        }

        if (!termoAceito) {
            alert('Você precisa aceitar os termos para se cadastrar.');
            return;
        }

        const novoUsuario: Usuario = { nome, email, numero, dataCadastro: Date.now() };
        const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        usuarios.push(novoUsuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Cadastrado com sucesso!');

        navigate('/depositoRapido');
    };

    return (
        <div className={styles.container}>
            <main className={styles.cadastro}>
                <FrameTopo texto="Cadastro" />
                <h1 className={styles.descricaoPagina}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>

                <form onSubmit={handleCadastro}>
                    <label htmlFor="nome">Name</label>
                    <input
                        type="text"
                        placeholder="Ex: Jon Doe"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        placeholder="Ex: jondoe@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="number">WhatsApp Number</label>
                    <input
                        type="number"
                        placeholder="+55 (85) 99793-5645"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />

                    <div className={styles.marcarOpcao}>
                        <input
                            type="radio"
                            className={styles.confirmacao}
                            checked={termoAceito}
                            onChange={() => setTermoAceito(!termoAceito)}
                        />
                        <p className={styles.termo}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                            <a href="">Morbi vitae eleifend</a> eu eleifend ac vel elit.{' '}
                        </p>
                    </div>

                    <Button texto="Criar cadastro" />
                </form>
            </main>
            <img
                src="/signup-payment/Home-Indicator.png"
                alt="incador de página"
                className={styles.indicador}
            />
        </div>
    );
};