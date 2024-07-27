
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Loginn from './pages/Loginn';
import Signup from './pages/Signup';
import Verification from './pages/Verification';
import Verifyemail from './pages/Verifyemail';
import Forgotpassword from './pages/Forgetpassword';
import Resetpassword from './pages/Resetpassword';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
<div className='min-h-screen'>
<Navbar/>

      <Routes>
        
          
          <Route path="/" element={<Home/>} />
          <Route path="orders" element={<Orders/>} />
          <Route path="login" element={<Loginn/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="verification_success" element={<Verification/>} />
          <Route path="verifyemail" element={<Verifyemail/>} />
          <Route path="forgetpassword" element={<Forgotpassword/>} />
          <Route path="resetpassword/:token" element={<Resetpassword/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>

</div>
  );
}

export default App;
