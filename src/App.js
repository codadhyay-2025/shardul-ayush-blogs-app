import logo from './logo.svg';
import './App.css';
import  Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
function App() {
  return (
   
    <div>
      <Header/>
      {/* <Register/> */}
      
       <Login/>
       {/* <Dashboard/> */}

    </div>
  );
}

export default App;
