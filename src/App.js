import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './conpanets/Header';
import Home from './conpanets/Home';
import AppProduct from './conpanets/AppProduct';
import Product from './conpanets/Product';
import Basket from './conpanets/Basket';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appProduct' element={<AppProduct/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/basket' element={<Basket/>}/>
       </Routes>
    </div>
  );
}

export default App;
