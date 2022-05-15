import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../routes/Routes';
import ProductViewModal from './ProductViewModal';

const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={props => (
        <div>
          <Header {...props} />
          <div className='container'>
            <div className="main">
              <Routes />
            </div>
          </div>
          <Footer />
          <ProductViewModal />
        </div>
      )}/>
    </BrowserRouter>
  )
}

export default Layout