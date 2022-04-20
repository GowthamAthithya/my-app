import './App.css';
import HomePage from './homepage';
import AdminLogin from './adminLogin';
import LoginPage from './login-Page';
import NameList1 from './nameList1';
import NameList2 from './nameList2';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, /*Link*/ } from "react-router-dom"; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/nameList1" element={<NameList1 />} />
        <Route path="/nameList2" element={<NameList2 />} />
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
