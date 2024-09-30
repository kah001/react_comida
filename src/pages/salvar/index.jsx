import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Salvar() {
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [validade, setValidade] = useState('')
    const [preco, setPreco] = useState('')
    const [setor, setSetor] = useState('')
    const [estoque, setEstoque] = useState(0)


    async function salvar() {
        const url = 'http://localhost:5010/comida'
        const paramCor = {
            "nome": nome,
            "tipo": tipo,
            "validade": validade,
            "preco": preco, 
            "setor": setor, 
            "estoque": estoque
        }

        let resp = await axios.post(url, paramCor)
        alert ('Comida adicionado na lista. Id: ' + resp.data.novoId)
    }

    return (
        <div className="pagina-salvar">


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

                <div className='botao' onClick={salvar}>Salvar</div>
            </section>


        </div>
    )
}