import './index.scss'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='pagina-inicio'>

            <Link to='/salvar'>Salvar</Link>
            <Link to='/consultar'>Consultar</Link>
            <Link to='/deletar'>Deletar</Link>

        </div>
    )
}