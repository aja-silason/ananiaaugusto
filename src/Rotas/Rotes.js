import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/page/Home'
export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}