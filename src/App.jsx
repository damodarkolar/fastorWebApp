import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom" 
import { Home } from './pages/Home';
import { MobileNumberEntryPage } from './pages/MobileNumberEntryPage';
import { OtpEntryPage } from './pages/OtpEntryPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { useDispatch } from 'react-redux';
import { fetchResData } from './redux/getProducts/actionTypes';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<MobileNumberEntryPage/>}/>
        <Route path='/otpEntry' element={<OtpEntryPage/>}/>
        <Route path='/res/:id' element={<ProductDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
