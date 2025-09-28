import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
function App() {
  return (

    <div>
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/register" element={<Register/>}  />
          <Route path="/login" element={<Login/>}  />
          <Route path="/blogs" element={<Blogs/>}  />
          <Route path="/" element={<Dashboard/>}  />
          {/* <Route path="/register" element={<Register/>} /> */}

          
        </Routes>
      </Router>
      
      {/* <Dashboard /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Blogs /> */}
    </div>
  );
}

export default App;
