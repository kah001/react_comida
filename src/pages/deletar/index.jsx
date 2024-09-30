import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Deletar() {
    const [id, setId] = useState('')

    async function deletar() {
        const identificador = id
        const url = 'http://localhost:5010/comida/' + identificador
        let resp = await axios.delete(url, identificador)
    }
    
    return (
        <div className='pagina-deletar'>

             <section className='form'>
                <h1>DELETAR</h1>

                <label>Id:</label>
                <input type="text" value={id} onChange={a => setId(a.target.value)}/>

                <div className='botao' onClick={deletar}>Deletar</div>
            </section>

        </div>
    )
}