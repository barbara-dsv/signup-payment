import { FormEvent, useState, useEffect } from 'react';
import { Button } from '../../components/Button';
import { FrameTopo } from '../../components/FrameTopo';
import styles from './cadastro.module.css';
import { useNavigate } from 'react-router-dom';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface Usuario {
    nome: string;
    email: string;
    numero: string;
    senha: string;
    dataCadastro: number; 
}

export const Cadastro: React.FC = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
    const [termoAceito, setTermoAceito] = useState(false);


    const handleClickMostrarSenha = () => setMostrarSenha((prev) => !prev);
    const handleClickMostrarConfirmarSenha = () => setMostrarConfirmarSenha((prev) => !prev);

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

        if (!nome || !email || !numero || !senha || !confirmarSenha) {
            alert('Por favor, preencha todos os campos para se cadastrar');
            return;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }

        if (!termoAceito) {
            alert('Você precisa aceitar os termos para se cadastrar.');
            return;
        }

        const novoUsuario: Usuario = { nome, email, numero, senha ,dataCadastro: Date.now() };
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
                    <label htmlFor="nome">Name completo*:</label>
                    <input
                        type="text"
                        placeholder="Ex: Jon Doe"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <label htmlFor="email">E-mail*:</label>
                    <input
                        type="text"
                        placeholder="Ex: jondoe@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="number">WhatsApp Number*:</label>
                    <input
                        type="number"
                        placeholder="+55 (85) 99793-5645"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                    <label htmlFor="senha">Senha*:</label>

                    <FormControl fullWidth>
                        <OutlinedInput
                        id='senha'
                        type={mostrarSenha ? "text" : "password"}
                        placeholder='Digite sua senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        endAdornment={
                            <InputAdornment position='end'>
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickMostrarSenha}
                            edge="end"
                            >
                            {mostrarSenha ? <VisibilityOff/> :<Visibility /> }
                            </IconButton>
                            </InputAdornment>
                        }
                        className={styles.input_senha}
                        sx={{
                            borderRadius: "100px",
                            padding: "18px",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontFamily: "'Inter', sans-serif",
                            height: "50px",
                            backgroundColor: "rgba(255, 255, 255, 0.36)",
                            outline: "none",
                            border: "2px solid #FFFFFF",
                            "& .MuiInputBase-input::placeholder": {
                            color: "rgba(255, 255, 255, 0.5)", 
                            },
                            "& .MuiInputBase-input": {
                              outline: "none", 
                            },
                            "& .MuiInputBase-root": {
                              outline: "none", 
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none", 
                            },
                            "& fieldset": {
                              borderColor: "#D0D5DD",
                            },
                            "&:hover fieldset": {
                              borderColor: "#D0D5DD", 
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#D0D5DD", 
                            },
                          }}
                          
                        />
                    </FormControl>
                    <label htmlFor="comfirmacao">Confirmação senha*:</label>

                   <FormControl fullWidth>
                        <OutlinedInput
                        id='senha'
                        type={mostrarConfirmarSenha  ? "text" : "password"}
                        placeholder='Digite sua senha'
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        endAdornment={
                            <InputAdornment position='end'>
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickMostrarSenha} 
                            onMouseDown={handleClickMostrarConfirmarSenha}  
                            edge="end"
                            >
                            {mostrarConfirmarSenha  ? <VisibilityOff/> :<Visibility /> }
                            </IconButton>
                            </InputAdornment>
                        }
                        className={styles.input_senha}
                        sx={{
                            borderRadius: "100px",
                            padding: "18px",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontFamily: "'Inter', sans-serif",
                            height: "50px",
                            backgroundColor: "rgba(255, 255, 255, 0.36)",
                            outline: "none",
                            border: "2px solid #FFFFFF",
                            "& .MuiInputBase-input::placeholder": {
                            color: "rgba(255, 255, 255, 0.5)", 
                            },
                            "& .MuiInputBase-input": {
                              outline: "none", 
                            },
                            "& .MuiInputBase-root": {
                              outline: "none", 
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none", 
                            },
                            "& fieldset": {
                              borderColor: "#D0D5DD",
                            },
                            "&:hover fieldset": {
                              borderColor: "#D0D5DD", 
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#D0D5DD", 
                            },
                          }}
                          
                        />
                    </FormControl>

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