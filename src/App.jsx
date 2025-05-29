import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from "./pages/Product/Products";
import Users from "./pages/Users/Users";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import UserDetail from './pages/UserDetail/UserDetail';
import Selected from './pages/Selected/Selected';

const App = () => {
  return (
    <>
    <Header/>
     <Routes >  
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products />} />
        <Route path='/users' element={<Users />} />
        <Route path='/selected' element={<Selected />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
    <Footer/>
    </>
  );
};

export default App;