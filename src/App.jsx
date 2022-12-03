import './App.css';
import { Route, Routes } from "react-router-dom" 
import { Home } from './pages/Home';
import { MobileNumberEntryPage } from './pages/MobileNumberEntryPage';
import { OtpEntryPage } from './pages/OtpEntryPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
function App() {
  return (
    <div className="App">
      APP
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
