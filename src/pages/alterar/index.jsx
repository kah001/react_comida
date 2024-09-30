import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Alterar() {
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [validade, setValidade] = useState('')
    const [preco, setPreco] = useState('')
    const [setor, setSetor] = useState('')
    const [estoque, setEstoque] = useState(0)
    const [id, setId] = useState(0)

    async function alterar() {
        const url = 'http://localhost:5010/comida/' + id
        const paramCor = {
            "nome": nome,
            "tipo": tipo,
            "validade": validade,
            "preco": preco, 
            "setor": setor, 
            "estoque": estoque
        }

        await axios.put(url, paramCor)
    }

    return (
        <div className='pagina-alterar'>

            <section className='form'>
                <h1>COMIDAS</h1>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)} />

                <label>Tipo:</label>
                <input type="text" value={tipo} onChange={a => setTipo(a.target.value)} />

                <label>Validade:</label>
                <input type="date" value={validade} onChange={a => setValidade(a.target.value)} />

                <label>Preço:</label>
                <input type="text" value={preco} onChange={a => setPreco(a.target.value)} />

                <label>Setor:</label>
                <input type="text" value={setor} onChange={a => setSetor(a.target.value)} />

                <label>Estoque:</label>
                <input type="text" value={estoque} onChange={a => setEstoque(a.target.value)} />

                <label>Id:</label>
                <input type="text" value={id} onChange={a => setId(a.target.value)}/>

                <div className='botao' onClick={alterar}>Alterar</div>
            </section>

        </div>
    )
}