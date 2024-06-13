
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Loginn from './pages/Loginn';
import Signup from './pages/Signup'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
<>
<Navbar/>

      <Routes>
        
          
          <Route path="/" element={<Home/>} />
          <Route path="orders" element={<Orders/>} />
          <Route path="login" element={<Loginn/>} />
          <Route path="signup" element={<Signup/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>

</>
  );
}

export default App;
