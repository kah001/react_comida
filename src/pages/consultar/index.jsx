import './index.scss'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Consultar() {
    const [listaComidas, setListaComidas] = useState([])

    async function buscar() {
        const url = 'http://localhost:5010/comida'
        let resp = await axios.get(url)

        setListaComidas(resp.data)
    }


    return (
        <div className='pagina-consultar'>

            <button onClick={buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Validade</th>
                        <th>Preço</th>
                        <th>Setor</th>
                        <th>Estoque</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {listaComidas.map((item, pos) =>
                        <tr key={pos}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.tipo}</td>
                            <td>{new Date(item.validade).toLocaleDateString()}</td>
                            <td>{item.preco}</td>
                            <td>{item.setor}</td>
                            <td>{item.estoque}</td>
                            <td><Link to='/alterar'>alterar</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}