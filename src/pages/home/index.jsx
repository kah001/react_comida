import './index.scss'
import { useState } from 'react'

export default function Home() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className='pagina-inicio'>
            <div className='form'>
                <h1>Usuário</h1>

                <label>Nome:</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)} />

                <label>Senha:</label>
                <input type="text" placeholder='********' value={senha} onChange={a => setSenha(a.target.value)} />

                <div className='botao'>ENTRAR</div>
            </div>
        </div>
    )
}