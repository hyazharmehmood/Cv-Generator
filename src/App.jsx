import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TemplateData from './components/TemplateDate'
import Nav from './components/Nav'
import AllTemplates from './components/All Templates/AllTemplates'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav showDownloadBtn={true} />
      <Routes>
        <Route path="/" element={<TemplateData/>}/> 
        <Route path="/view-template" element={<AllTemplates/>}/> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App