import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Products = lazy(() => import("./pages/Product/Products"));
const Users = lazy(() => import("./pages/Users/Users"));
const Home = lazy(() => import('./pages/Home/Home'));
const Header = lazy(() => import('./components/Header/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'));
const UserDetail = lazy(() => import('./pages/UserDetail/UserDetail'));
const Selected = lazy(() => import('./pages/Selected/Selected'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/users' element={<Users />} />
          <Route path='/selected' element={<Selected />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/users/:id' element={<UserDetail />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;