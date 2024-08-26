import React from 'react'
import {CandidatePage, Home} from './pages/pageIndex'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/party' element={<CandidatePage/>} />
    </Routes>
    </BrowserRouter>

  )
}
