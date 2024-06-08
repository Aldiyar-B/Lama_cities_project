import React from 'react';
import NavBar from './components/NavBar'
import Home from './pages/Home'
// import Moscow from './pages/Moscow'
import CityPage from './pages/CityPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/city/:id" element={<CityPage />}>
        </Route>

        {/* <Route path='/Moscow' element={<Moscow />}>
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}