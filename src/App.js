
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import { CartProvider } from './Context/ContextReducer';
import { SearchProvider } from './Context/SearchContext';
import Forgotpassword from './pages/Forgetpassword';
import Home from './pages/Home';
import Loginn from './pages/Loginn';
import Orders from './pages/Orders';
import Resetpassword from './pages/Resetpassword';
import Signup from './pages/Signup';
import Verification from './pages/Verification';
import Verifyemail from './pages/Verifyemail';

import Cart from "./pages/Cart";
function App() {
  return (
    <div className='min-h-screen'>
      <SearchProvider> 
         <Navbar />
        <CartProvider>
        
          <Routes>


            <Route path="/" element={<Home />} />
            <Route path="orders" element={<Orders />} />
            <Route path="login" element={<Loginn />} />
            <Route path="signup" element={<Signup />} />
            <Route path="cart" element={<Cart />} />
            <Route path="verification_success" element={<Verification />} />
            <Route path="verifyemail" element={<Verifyemail />} />
            <Route path="forgetpassword" element={<Forgotpassword />} />
            <Route path="resetpassword/:token" element={<Resetpassword />} />
            {/* <Route path="*" element={<NoPage />} /> */}

          </Routes>
        </CartProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
