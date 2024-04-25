import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './CartContext';
import { Provider } from 'react-redux'; 
import store from './store';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const App = () => {
  return (
    <CartProvider>
      
        <Header />
        <main className="py-3">
          <Container>
            <Outlet />
          </Container>
        </main>
        <Footer />
        <ToastContainer />
      
    </CartProvider>
  );
};

export default App;
