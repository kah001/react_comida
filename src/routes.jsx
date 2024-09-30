import Home from "./pages/home"
import Salvar from "./pages/salvar"
import Consultar from "./pages/consultar"
import Alterar from "./pages/alterar"
import Deletar from "./pages/deletar"

import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/salvar' element={<Salvar />} />
                <Route path='/consultar' element={<Consultar />} />
                <Route path='/alterar' element={<Alterar />} />
                <Route path='/deletar' element={<Deletar />} />
            </Routes>
        </BrowserRouter>
    )
}