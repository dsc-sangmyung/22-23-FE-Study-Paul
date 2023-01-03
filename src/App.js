import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage'
import LoginPage from './pages/login/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="mainpage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;