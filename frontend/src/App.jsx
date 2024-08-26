import React from 'react'
import {VotingPage, Home} from './pages/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/candidatePage' element={<VotingPage/>} />
    </Routes>
    </BrowserRouter>

  )
}
